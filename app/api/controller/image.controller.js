const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");
const path = require('path');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


// create image by prompt
async function createImage(prompt,size) {


    const transcript = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: size,
    });

    return transcript.data.text;
}

// Main function
async function main(req, res, next) {
    try {
        let prompt = `${req.body.prompt}`;
        let size = `${req.body.size}`;
        
        // await recordAudio(path);
        const img = await createImage(prompt,size);

        res.send({
            "status": 200,
            "message": img
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