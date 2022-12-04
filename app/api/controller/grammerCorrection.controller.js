

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Correct this to standard English:\n\n${req.body.animal}.`,
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}






export const correction = async (req, res, next) => {
	try {
		req.flash("success", "The form has sended successfully!");
		res.redirect(req.get("referer"));
	} catch (error) {
		req.flash("error", `Something happened! like: ${error}`);
		next(error);
	}
};