import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [],
    selectedOption : [],
    score : 0,
    topic : "MERN Development"
}

const quizSlice = createSlice({
    name:"quiz",
    initialState,
    reducers:{
        manageScore :(state, action)=>{
            state.score = action.payload;
        },
        submitedOption : (state, action) =>{
            state.selectedOption.push(action.payload)
        },
        setQuestions : (state, action) =>{
            state.questions = [...(action.payload)]
        },
        setTopicForQuiz : (state, action) => {
            state.topic = action.payload
        }
    }
})

export const {manageScore, submitedOption, setQuestions, setTopicForQuiz} = quizSlice.actions
export default quizSlice.reducer