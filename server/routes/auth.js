import express  from "express";

const router=express.Router();

import { welcome } from "../controllers/auth.js";

//GET POST PUT DELETE
router.get('/',welcome);
;

export default router;