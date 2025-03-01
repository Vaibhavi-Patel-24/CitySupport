import express from 'express';

import { loginAdmin } from "../controller/adminLogin-controller.js"
import { contactUs } from '../controller/contact-controller.js';
import Contact from '../models/contactModel.js';

const router = express.Router();


router.post('/admin123/login', loginAdmin);
router.post('/contact', contactUs);


router.get("/queries", async (req, res) => {
    try {
      const queries = await Contact.find();
      res.json(queries);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

export default router;
