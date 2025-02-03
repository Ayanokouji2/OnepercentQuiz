import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./features/quizSlice";

export default configureStore({
    reducer: {
        quiz: quizSlice
    }
})