const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


module.exports.correction = async (req, res, next) => {
    try {
        console.log(req.body)
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Correct this to standard English:\n\n${req.body?.userText}.`,
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });
        // res.status(200).json({ result: completion.data.choices[0].text });
        res.send(completion.data.choices[0]);
    } catch (error) {
        console.log("error", `Something happened! like: ${error}`);
        next(error);
    }
};
