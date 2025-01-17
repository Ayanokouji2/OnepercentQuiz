import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import geminiModel from '../libs/gemini.js'
import { getPrompt } from "../libs/prompt.js";
import fs from 'fs'

import data from '../response/response.json'

console.log(data)

export const getUserProfile = (asyncErrorHandler(async (req, res) =>{

    const prompt = getPrompt("Data Structure and Algorithm")
    // const {response} = await geminiModel.generateContent(prompt)

    // const responseData = response.text()
    // const data = responseData.trim("```json").trim("```")
    // fs.writeFileSync('./response/response.json',data,'utf-8')

    console.log("writing complete")
    res.status(200).json({
        success: true,
        message:" Sab thik hai"
    })
}))