import {Router} from 'express'
import { getUserProfile, getQuiz, createUser } from '../controllers/user.controller.js';

const router = Router();

router
    .route("/getQuiz")
    .get(getQuiz)

router
    .route("/createUser")
    .post(createUser)

export default router;