import express from 'express';

import { loginAdmin } from "../controller/adminLogin-controller.js"


const router = express.Router();


router.post('/admin123/login', loginAdmin);


export default router;
