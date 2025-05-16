import express from 'express';
import { loginAdmin } from "../controller/adminLogin-controller.js";
import { contactUs } from '../controller/contact-controller.js';
import { createFAQ, getFAQs, updateFAQ, deleteFAQ } from '../controller/faq-controller.js';
import { deleteSubscriber,getSubscribers,newSubscriber, } from '../controller/subscribers-controller.js';
import { createMustVisit, deleteMustVisit, getAllMustVisit } from '../controller/adminMustVisit-controller.js';
import { createSocial,getAllSocial,deleteSocial} from "../controller/adminSocial-controller.js";
import {deleteBanner, getAllBanners, uploadBanner} from '../controller/banner-controller.js';

import Contact from '../models/contactModel.js';
import upload from '../middleware/multer.js'; 
import { createLocalBusiness, deleteLocalBusiness, getAllLocalBusinesses, updateLocalBusiness } from '../controller/homelocalBusinessController.js';
import { deletePamflate, getPamflate, uploadPamflate } from '../controller/pamflate-controller.js';

import { createPopularPlace, getAllPopularPlaces, deletePopularPlace } from "../controller/adminPopularPlace-controller.js";
import {createEvent,deleteEvent,getAllEvents} from '../controller/adminEvent-controller.js'
import {createEventType,deleteEventType,getAllEventTypes} from '../controller/adminEventType-controller.js'
import { createHospital, deleteHospital, getAllHospitals } from '../controller/adminHospitalController.js';
import { createMunicipal, deleteMunicipal, getAllMunicipals } from '../controller/adminMunicipal.js';
import { createEelectricity, deleteEelectricity, getAllEelectricity } from '../controller/adminElectricity.js';
import { createBusiness, deleteBusiness, getAllBusiness } from '../controller/RegisterBusiness-controller.js';



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

// MustVisit for the adminpanel
router.post('/mustvisit', upload.single("image"), createMustVisit);
router.get('/mustvisit/:id', getAllMustVisit);
router.delete('/mustvisit/:id', deleteMustVisit);

// Popular Places for Admin Panel
router.post('/popularplaces', upload.single('image'), createPopularPlace); // Ensure 'image' is the field used in the frontend
router.get('/popularplaces', getAllPopularPlaces);
router.delete('/popularplaces/:id', deletePopularPlace);

//Social for the adminpanel
router.post('/social',  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'profilePhoto', maxCount: 1 }
  ]), createSocial);
router.get('/social/:id', getAllSocial);
router.delete('/social/:id', deleteSocial);



// Banner for Amdinpanel
router.post('/banner', upload.single("image"),uploadBanner)
router.get('/banner/:id', getAllBanners);
router.delete('/banner/:id', deleteBanner);

// Pamflate
router.post('/Pamflate', upload.single("image"),uploadPamflate)
router.get('/Pamflate/:id', getPamflate);
router.delete('/Pamflate/:id', deletePamflate);

// HomeLocalBussiness
router.post("/homelocalbussiness",upload.single("image"), createLocalBusiness);
router.get("/homelocalbussiness/:id", getAllLocalBusinesses);
router.put("/homelocalbussiness/:id", updateLocalBusiness);
router.delete("/homelocalbussiness/:id", deleteLocalBusiness);


// Subscriber Routes
router.post('/subscriber', newSubscriber);
router.get('/subscribers', getSubscribers);
router.delete('/subscribers/:id', deleteSubscriber); 

// Hospitals 
router.post('/hospitals', createHospital);
router.get('/hospitals', getAllHospitals);
router.delete('/hospitals/:id', deleteHospital); 

// Municipals 
router.post('/municipals', createMunicipal);
router.get('/municipals', getAllMunicipals);
router.delete('/municipals/:id', deleteMunicipal); 

// Electricity 
router.post('/electricity', createEelectricity);
router.get('/electricity', getAllEelectricity);
router.delete('/electricity/:id', deleteEelectricity); 

//Event Routes
router.post("/events",upload.single('image'),createEvent);
router.get("/events",getAllEvents)
router.delete("/events/:id",deleteEvent)

//EventType Routes
router.post("/eventType",createEventType)
router.delete('/eventType/:id',deleteEventType)
router.get("/eventType",getAllEventTypes)
router.post('/business', upload.single('image'), createBusiness);
router.get('/business', getAllBusiness);
router.delete('/business/:id', deleteBusiness);


export default router;
