import express  from "express";

const router=express.Router();

import * as auth from "../controllers/auth.js";

//GET POST PUT DELETE
router.get('/',auth.welcome);
//only by clicking the email to vertify
router.post('/pre-register',auth.preRegister);
router.post("/register",auth.register);
router.post('/login',auth.login);
router.post('/forgot-password',auth.forgotPassword);
router.post('/access-account',auth.accessAccount);
export default router;