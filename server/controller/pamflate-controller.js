import Pamflate from "../models/pamflate.js";
import uploadToCloudinary from "../services/cloudinary.js";

export const uploadPamflate = async (req, res) => {
    try {
        const altText = req.body.altText;
        console.log('Got request to create Pamflate: uploadPamflate');
        console.log('Headers:', req.headers['content-type']);
        console.log('Body:', req.body);

        if (!req.file || !altText) {
            return res.status(400).json({ msg: "All fields including image are required" });
        }

        const imagePath = req.file.path;
        const imageURL = await uploadToCloudinary(imagePath);

        const newPamflate = new Pamflate({ altText, imageURL });
        await newPamflate.save();

        return res.status(201).json({ msg: 'Pamflate created successfully', data: newPamflate });
    } catch (error) {
        console.error('Error in creating Pamflate!', error);
        return res.status(500).json({ msg: 'Internal Server Error' });
    }
};

// ✅ Fetch all banners
export const getPamflate = async (req, res) => {
    try {
        const pamflate = await Pamflate.find();
        if (pamflate)
        return res.status(200).json({ msg: 'Pamflate fetched successfully', data: pamflate });
    } catch (error) {
        console.error('Error fetching Pamflate!', error);
        return res.status(500).json({ msg: 'Internal Server Error' });
    }
};

// ✅ Delete a banner by ID
export const deletePamflate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ msg: 'Pamflate ID is required' });
        }

        const deletedPamflate = await Pamflate.findByIdAndDelete(id);
        if (!deletedPamflate) {
            return res.status(404).json({ msg: 'Pamflate not found' });
        }

        return res.status(200).json({ msg: 'Pamflate deleted successfully' });
    } catch (error) {
        console.error('Error deleting Pamflate!', error);
        return res.status(500).json({ msg: 'Internal Server Error' });
    }
};
