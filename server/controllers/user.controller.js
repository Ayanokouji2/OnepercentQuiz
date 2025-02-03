import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import geminiModel from '../libs/gemini.js'
import { getPrompt } from "../libs/generatingPrompt.js";
import fs from 'fs'
import data from '../response/response.json' assert { type : "json"}
import UserModel from "../models/userModel.js";

export const getUserProfile = (asyncErrorHandler(async (req, res) =>{

    
}))

export const getQuiz = asyncErrorHandler(async (req, res) => {
    const {query : topic} = req.query

    const prompt = getPrompt(topic)
    
    const {response} = await geminiModel.generateContent(prompt)

    // const responseData = response.text()
    const data = response.text()

    const formattedData = data.slice(7,data.length - 4)
    // fs.writeFileSync('./response/response.json',formattedData,'utf-8')

    res.status(200).json({
        questions: JSON.parse(formattedData),
        success: true,
        message:" Sab thik hai"
    })

})

export const createUser = asyncErrorHandler(async(req,res) => {

    console.log(req.body)
    const {username, email, password, preparation} = req.body;

    console.log([username, email, password, preparation])

    const user = await UserModel.create({username, email, password, preparation});

    
    return res.status(201).json({
        success: true,
        message: "User Signed in Sucessfully",
        user
    })
})