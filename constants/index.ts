const _intro = `
--------------------------

       Assistant 🦄
    with Google Gemini

--------------------------

 ( input 'exit' to quit )
\n\n`;


export const Model = {
  NAME: "gemini-1.5-flash-8b",
  API_KEY: process.env.GEMINI_KEY || null,
  INSTRUCTIONS: "You are a helpful assistant with concise responses.",
};

export const Message = {
  INTRO: _intro,
  PROMPT: "How can I help you?\n",
  LOADING: "Thinking... \n",
  ERROR: "GEMINI_KEY not found in .env\n",
};
