import express from 'express';
import { loginAdmin } from '../controller/adminLogin-controller.js';
import { contactUs } from '../controller/contact-controller.js';
import { createFAQ, getFAQs, updateFAQ, deleteFAQ } from '../controller/faq-controller.js';
// import upload from '../middleware/multer.js';
// import { uploadImage } from '../controllers/upload-controller.js';

const router = express.Router();

// ✅ Admin Login Route
router.post('/admin123/login', loginAdmin);

// ✅ Contact Us Routes
router.post('/contact', contactUs);

// ✅ FAQ Management
router.get('/faqs', getFAQs);
router.post('/faqs', createFAQ);
router.put('/faqs/:id', updateFAQ);
router.delete('/faqs/:id', deleteFAQ);

// ✅ Image Upload Route
// router.post('/upload', upload.single('image'), uploadImage);

export default router;
