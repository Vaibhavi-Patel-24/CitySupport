// === Controller ===
import Social from "../models/adminSocialModel.js";
import uploadToCloudinary from "../services/cloudinary.js";

export const createSocial = async (req, res) => {
  try {
    console.log('Got request from adminSocial!');
    const { title, name, datePosted } = req.body;

    console.log('Headers:', req.headers['content-type']);
    console.log('Body:', req.body);
    console.log('File:', req.file);

    // Ensure required fields and file are present
    if (!req.file || !title || !name || !datePosted) {
      return res.status(400).json({ msg: "All fields including image are required" });
    }

    const imagePath = req.file ? req.file.path : '';
    if (imagePath) {
      // Upload to Cloudinary
      const imageURL = await uploadToCloudinary(imagePath);
      console.log(imageURL);

      const newSocial = new Social({ title, name, datePosted, imageURL });
      await newSocial.save();

      return res.status(201).json({ msg: "Social post created successfully", data: newSocial });
    }

    return res.status(400).json({ msg: "Image upload failed" });

  } catch (error) {
    console.error("Error in createSocial:", error);
    return res.status(500).json({ msg: "Server error while creating Social post" });
  }
};

// ✅ Delete a Social Post
export const deleteSocial = async (request, response) => {
  try {
    console.log('Entered delete social controller');
    const { id } = request.params;

    console.log(`Deleting Social post with ID: ${id}`);

    const deletedPost = await Social.findByIdAndDelete(id);

    if (!deletedPost) {
      console.error("Social post not found");
      return response.status(404).json({ msg: "Social post not found" });
    }

    console.log("Social post deleted successfully:", deletedPost);
    return response.status(200).json({ msg: "Social post deleted successfully" });
  } catch (error) {
    console.error("Error deleting Social post:", error);
    return response.status(500).json({ msg: "Server error while deleting Social post" });
  }
};

// ✅ Get All Social Posts
export const getAllSocial = async (req, res) => {
  try {
    const posts = await Social.find();
    return res.status(200).json({ data: posts });
  } catch (error) {
    console.error("Error fetching Social posts:", error);
    return res.status(500).json({ msg: "Failed to fetch Social posts" });
  }
};
