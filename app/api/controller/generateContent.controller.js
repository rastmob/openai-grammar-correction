const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateContent = async (req, res, next) => {

    try{
        console.log(`${req.body.mainCategory} kategorisinde ${req.body.childCategory} ürün grubunda,  ${req.body.productName} isimli ürün hakkında, tanıtıcı bir SEO Açıklaması üretebilir misin?`)
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${req.body.mainCategory} kategorisinde ${req.body.childCategory} ürün grubunda,  ${req.body.productName} isimli ürün hakkında, tanıtıcı bir SEO Açıklaması üretebilir misin?`,
            temperature: 0,
            max_tokens: 1000,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });
        console.log(completion.data.choices)
        res.send({
            "status": 200,
            "message": completion.data.choices[0].text
        });
    } catch (error) {
        console.log("error", `Something happened! like: ${error}`);
        next(error);
    }
};

module.exports = {
    generateContent
}