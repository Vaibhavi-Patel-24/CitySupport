import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'uploads' // Cloudinary folder
    });

    // Delete local file after upload
    fs.unlinkSync(filePath);

    return result.secure_url; // Return Cloudinary URL
  } catch (error) {
    console.error('Cloudinary Upload Error:', error);
    throw new Error('Upload to Cloudinary failed');
  }
};
