import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema({
    // Owner Info (from RegisterBusiness.jsx)
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    businessName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    streetAddress: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    gstNo: { type: String, required: true },
    aadhaar: { type: String, required: true },

    // Business Details (from BusinessDetails.jsx)
    businessCategory: { type: String, required: true },
    productCategory: { type: String, required: true },
    productName: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String },
    stockAvailability: { type: String, required: true },
    productPhotoUrl: { type: String } // optional future file upload
}, { timestamps: true });

const Business = mongoose.model('Business', BusinessSchema);

export default Business;
