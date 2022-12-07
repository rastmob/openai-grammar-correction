# OpenAI Grammar Corrector

![nodejs angular openai ai example project grammar gpt gpt3](https://raw.githubusercontent.com/rastmob/openai-grammar-correction/main/Grammar%20CorrectionOpenAINodejsAngular.png)

This project helps you to correct your **English sentences to Standard English** with the help of **OpenAI API**. Paste your text, **AI will help you to perfect it**.

This project consists of 2 app project.

1.  **Angular15**
2.  **Nodejs** 

## Installation
Follow the below steps to make it run the project in your environment;

1. run `npm install` in the main directory
2. visit openai.com and register
3. get your API_KEY under account menu
4. create `.env` in the main directory and paste your API key in it `OPENAI_API_KEY=$YOURAPIKEY`
5. run **node index.js** in the main directory
6. Now Nodejs backend are working!
7. launch 2nd terminal and `cd app`
8. `cd openai-grammar-correction`
9. `npm install`
10. `ng serve`
11. Now Angular App also running, visit http://localhost:4200 


## OpenAI Implementation

Code below in grammerCorrection.controller.js helps us to correct our English sentences.

    const  completion = await  openai.createCompletion({
    model:  "text-davinci-003",
    prompt:  `Correct this to standard English:\n\n${req.body.userText}.`,
    temperature:  0,
    max_tokens:  60,
    top_p:  1.0,
    frequency_penalty:  0.0,
    presence_penalty:  0.0,
    });

## Contribution & Support
Follow the Issue template for informing about the issues and for making contributions.

**Follow us:**

https://twitter.com/rastmobile

https://www.linkedin.com/company/rastmobile/

https://www.behance.net/rastmobile 

**Reach us:**

contact@rastmobile.com

mehmet.alp@rastmobile.com
