import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import geminiModel from '../libs/gemini.js'
import { getPrompt } from "../libs/generatingPrompt.js";
import fs from 'fs'
import data from '../response/response.json' assert { type : "json"}
import UserModel from "../models/userModel.js";
import JWT from 'jsonwebtoken';

export const getUserProfile = (asyncErrorHandler(async (req, res) =>{

    
}))

export const getQuiz = asyncErrorHandler(async (req, res) => {
    const {query : topic} = req.query

    const prompt = getPrompt(topic)
    
    // const {response} = await geminiModel.generateContent(prompt)

    // const responseData = response.text()
    // const data = response.text()

    // const formattedData = data.slice(7,data.length - 4)
    // fs.writeFileSync('./response/response.json',formattedData,'utf-8')

    res.status(200).json({
        // questions: JSON.parse(formattedData),
        questions: data,
        success: true,
        message:" Sab thik hai"
    })

})

export const createUser = asyncErrorHandler(async(req,res) => {

    const {username, email, password, preparation} = req.body;

    const user = await UserModel.create({username, email, password, preparation});

    return res.status(201).json({
        success: true,
        message: "User Signed in Sucessfully",
        user
    })
})

export const loginUser = asyncErrorHandler(async(req,res)=>{

    const {email, password} = req.body;

    const user = await UserModel.findOne({email});

    // console.log(user,"This is the user");
    
    if(!user || user.password !== password){
        return res.status(404).json({
            success: false,
            error: "you are a fake user"
        })
    }

    const token = JWT.sign({id: user._id},process.env.SECRET_KEY);
    const userWithoutPass = user.toObject();
    delete userWithoutPass.password;

    console.log(token, "user token in backend");
    
    return res.status(200).json({
        success:true,
        user: userWithoutPass,
        token
    })
})