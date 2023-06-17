import fetch from "node-fetch";
import { generateWAMessageFromContent } from "@adiwajshing/baileys";
import fs from "fs";
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({apiKey: global.ai});
const openai = new OpenAIApi(configuration);

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Input a query. Example ${usedPrefix + command} write for me a JavaScript code for creating a loop.`;

  try {
    if (global.ai === "API_HERE")
      return m.reply('Put a valid API key in config js');

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: text}],
    });

    m.reply(`${response.data.choices[0].message.content}`);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      console.log(`${error.response.status}\n\n${error.response.data}`);
    } else {
      console.log(error);
      m.reply("Something went wrong:" + error.message);
    }
  }
};

handler.command = ['aiai'];
handler.diamond = false;

export default handler;
