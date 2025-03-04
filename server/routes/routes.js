import express from 'express';
import { loginAdmin } from "../controller/adminLogin-controller.js";
import { contactUs } from '../controller/contact-controller.js';
import { createFAQ, getFAQs, updateFAQ, deleteFAQ } from '../controller/faq-controller.js';
import { deleteSubscriber,getSubscribers,newSubscriber, } from '../controller/subscribers-controller.js';

import Contact from '../models/contactModel.js';
import upload from '../middleware/multer.js'; // Import Multer setup
// import { uploadImage } from '../controller/upload-controller.js'; // Import upload controller

const router = express.Router();

// ------------------------------------
// ✅ Admin Login Route
// ------------------------------------
router.post('/admin123/login', loginAdmin);

// ------------------------------------
// ✅ Contact Us Routes
// ------------------------------------
router.post('/contact', contactUs);

// Fetch all queries
router.get("/queries", async (req, res) => {
    try {
        const queries = await Contact.find();
        res.json(queries);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Delete a query by ID
router.delete("/queries/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedQuery = await Contact.findByIdAndDelete(id);

        if (!deletedQuery) {
            return res.status(404).json({ message: "Query not found" });
        }

        res.status(200).json({ message: "Query deleted successfully", deletedQuery });
    } catch (error) {
        console.error("Error deleting query:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// ------------------------------------
// ✅ FAQ Management Routes (Using Controller)
// ------------------------------------
router.get("/faqs", getFAQs);
router.post("/faqs", createFAQ);
router.put("/faqs/:id", updateFAQ);
router.delete("/faqs/:id", deleteFAQ);

// ------------------------------------
// ✅ Image Upload Route
// ------------------------------------
// router.post('/upload', upload.single('image'), uploadImage); 


// Subscriber Routes
router.post('/subscriber', newSubscriber);
router.get('/subscribers', getSubscribers);
router.delete('/subscribers/:id', deleteSubscriber); 

export default router;
