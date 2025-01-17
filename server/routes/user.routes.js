import {Router} from 'express'
import { getUserProfile } from '../controllers/user.controller.js';

const router = Router();

router
    .route("/profile")
    .get(getUserProfile)


export default router;