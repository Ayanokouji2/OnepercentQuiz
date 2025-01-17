import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import geminiModel from '../libs/gemini.js'
import { getPrompt } from "../libs/generatingPrompt.js";
import fs from 'fs'
import data from '../response/response.json' assert { type : "json"}

export const getUserProfile = (asyncErrorHandler(async (req, res) =>{

    const prompt = getPrompt("Geography of Jharkhand")

    
    const {response} = await geminiModel.generateContent(prompt)

    // const responseData = response.text()
    const data = response.text()

    const formattedData = data.slice(7,data.length - 4)
    fs.writeFileSync('./response/response.json',formattedData,'utf-8')

    console.log("writing complete")
    res.status(200).json({
        success: true,
        message:" Sab thik hai"
    })
}))