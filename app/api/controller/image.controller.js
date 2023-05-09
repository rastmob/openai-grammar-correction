const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");
const path = require('path');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Main function
async function main(req, res, next) {
    try {
        if (!req.files) {
            return res.status(400).send("No files were uploaded.");
        }

        const file = req.files?.imageFile;
        const path = "public" + "/files/images/" + file.name;

       file.mv(path, (err) => {
            if (err) {
                return res.status(500).send(err);
            }
           console.log("success",  path );
        }); 
        // await recordAudio(path);
       // const transcription = await transcribeAudio(path);

        res.send({
            "status": 200,
            "message": "uploaded"
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