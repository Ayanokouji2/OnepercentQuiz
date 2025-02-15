import {Router} from 'express'
import { getUserProfile, getQuiz, createUser, loginUser } from '../controllers/user.controller.js';

const router = Router();

router
    .route("/getQuiz")
    .get(getQuiz)

router
    .route("/createUser")
    .post(createUser)

router
    .route("/login")
    .post(loginUser)

export default router;