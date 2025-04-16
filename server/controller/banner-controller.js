import Banner from "../models/banner.js";
import uploadToCloudinary from "../services/cloudinary.js";

export const uploadBanner = async (req, res) => {
    try {
        const altText = req.body.altText;
        console.log('Got request to create banner: uploadBanner');
        console.log('Headers:', req.headers['content-type']);
        console.log('Body:', req.body);

        if (!req.file || !altText) {
            return res.status(400).json({ msg: "All fields including image are required" });
        }

        const imagePath = req.file.path;
        const imageURL = await uploadToCloudinary(imagePath);

        const newBanner = new Banner({ altText, imageURL });
        await newBanner.save();

        return res.status(201).json({ msg: 'Banner created successfully', data: newBanner });
    } catch (error) {
        console.error('Error in creating banner!', error);
        return res.status(500).json({ msg: 'Internal Server Error' });
    }
};

// ✅ Fetch all banners
export const getAllBanners = async (req, res) => {
    try {
        const banners = await Banner.find();
        if (banners)
        return res.status(200).json({ msg: 'Banners fetched successfully', data: banners });
    } catch (error) {
        console.error('Error fetching banners!', error);
        return res.status(500).json({ msg: 'Internal Server Error' });
    }
};

// ✅ Delete a banner by ID
export const deleteBanner = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ msg: 'Banner ID is required' });
        }

        const deletedBanner = await Banner.findByIdAndDelete(id);
        if (!deletedBanner) {
            return res.status(404).json({ msg: 'Banner not found' });
        }

        return res.status(200).json({ msg: 'Banner deleted successfully' });
    } catch (error) {
        console.error('Error deleting banner!', error);
        return res.status(500).json({ msg: 'Internal Server Error' });
    }
};
