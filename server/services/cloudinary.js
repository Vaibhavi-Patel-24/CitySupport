// services/cloudinary.js
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});

const uploadToCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    console.log("cloudinary code starts");
    const result = await cloudinary.uploader.upload(localFilePath, {
      folder: "uploads"
    });

    // Optional: delete local file after upload
    fs.unlinkSync(localFilePath);

    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error("Upload to Cloudinary failed");
  }
};

export default uploadToCloudinary;
