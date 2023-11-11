import express  from "express";

const router=express.Router();

import * as auth from "../controllers/auth.js";

//GET POST PUT DELETE
router.get('/',auth.welcome);
//only by clicking the email to vertify
router.post('/pre-register',auth.preRegister);

export default router;