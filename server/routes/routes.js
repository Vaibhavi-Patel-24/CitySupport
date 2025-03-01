import express from 'express';

import { loginAdmin } from "../controller/adminLogin-controller.js"
import { contactUs } from '../controller/contact-controller.js';


const router = express.Router();


router.post('/admin123/login', loginAdmin);
router.post('/contact', contactUs);


export default router;
