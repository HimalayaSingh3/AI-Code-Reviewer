const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCqBSHKzglqMAVA58z9x8i96bYXEs6r7_8");
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `
                you are a code review assistant.
                you are an expert in code review.
                you can also provide a code for the given code for better performance.
    `,
});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);

  console.log(result.response.text());

  return result.response.text();
}

module.exports = generateContent;
