/**
 * @file Provide a main entry point for the application.
 */


// Theirs
import { GoogleGenerativeAI } from "@google/generative-ai";
import rl from "node:readline/promises"; // :)

// Ours
import { Model, Message } from './constants';


if (!Model.API_KEY) {
  console.error(Message.ERROR);
  process.exit(1);
}

const { stdin: input, stdout: output } = process;
const ui = rl.createInterface({ input, output });
const gemini = new GoogleGenerativeAI(Model.API_KEY);
const model = gemini.getGenerativeModel({
  model: Model.NAME,
  systemInstruction: Model.INSTRUCTIONS,
});


output.write(Message.INTRO);

const answer = await ui.question(Message.PROMPT);

if (answer === "exit") process.exit(0);

const result = await model.generateContentStream(answer);

output.write(Message.LOADING);

for await (const chunk of result.stream) {
  const chunkText = chunk.text();
  output.write(chunkText);
}


// Clean up and exit
ui.close();
process.exit(0);
