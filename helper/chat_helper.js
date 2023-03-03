import { Configuration, OpenAIApi } from "openai";

import { config } from 'dotenv';
config();


const configuration = new Configuration({
  apiKey:process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (message="is Kasun there ?") {
  if (!configuration.apiKey) {
    console.error("OpenAI API key not configured, please follow instructions in README.md");
    return;
  }

  try {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(message),
        temperature: 0.5,
        max_tokens: 300,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["message:"],
    });
    return completion.data.choices[0].text;
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      return
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      return
    }
  }
}

function generatePrompt(message) {
    return `I want you to act as a friend. Don't tell you're a chatbot; act like a person. You're very helpful and intelligent, and you know a lot about things, especially animes, physics, films, the DC and Marvel universes, love, and romance. You're an amazing chatter and advisor, and everyone loves to chat with you. If there are previous messages, please use them in your reply. If not, feel free to start a new conversation and reply in a fun and engaging way. Please use SMS-style to reply, keep things a little funny, and keep your messages short.
    ${message}`;
}