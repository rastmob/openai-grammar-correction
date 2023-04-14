const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");
const mic = require("mic");
const { Readable } = require("stream");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const path = require('path');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// Record audio
function recordAudio(filename) {

    console.log("transcribeAudio");
    const coolPath = path.join(__dirname, filename);
    return new Promise((resolve, reject) => {
        const micInstance = mic({
            rate: "16000",
            channels: "1",
            fileType: "wav",
        });

        const micInputStream = micInstance.getAudioStream();
        const output = fs.createWriteStream(coolPath);
        const writable = new Readable().wrap(micInputStream);

        console.log("Recording... Press Ctrl+C to stop.");

        writable.pipe(output);

        micInstance.start();

        process.on("SIGINT", () => {
            micInstance.stop();
            console.log("Finished recording");
            resolve();
        });

        micInputStream.on("error", (err) => {
            reject(err);
        });
    });
}

// Transcribe audio
async function transcribeAudio(filename) {

    console.log("transcribeAudio");
    const coolPath = path.join(__dirname, filename);

    const transcript = await openai.createTranscription(
        fs.createReadStream(coolPath),
        "whisper-1"
    );

    console.log(transcript);
    return transcript.data.text;
}

// Main function
async function main(req, res, next) {
    try {
        const audioFilename = "audio_audio.mp3";
         console.log(audioFilename);
        // await recordAudio(audioFilename);
        const transcription = await transcribeAudio(audioFilename);

        console.log("Transcription");
        res.send({
            "status": 200,
            "message": transcription
        });
    } catch (error) {
        console.log(error);
        console.log("error", `Something happened! like: ${error}`);
        next(error);
    }


}

module.exports = {
    main
}