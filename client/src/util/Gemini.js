import { GoogleGenerativeAI } from "@google/generative-ai";

// console.log(import.meta.env.VITE_GEMINI_API_KEY, "Gemini api key")

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;


// console.log(result);