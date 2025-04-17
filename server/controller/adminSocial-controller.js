import Social from "../models/adminSocialModel.js";
import uploadToCloudinary from "../services/cloudinary.js";

// ✅ Create a Social Post
export const createSocial = async (req, res) => {
  try {
    console.log("Got request from adminSocial!");
    const { title, name, datePosted } = req.body;
    const files = req.files;

    console.log("Headers:", req.headers["content-type"]);
    console.log("Body:", req.body);
    console.log("Files:", files);

    // Validate required fields and files
    if (
      !files ||
      !files.image || !files.profilePhoto ||
      !title ||
      !name ||
      !datePosted
    ) {
      return res
        .status(400)
        .json({ msg: "All fields including image and profile photo are required" });
    }

    // Upload images to Cloudinary
    try {
      const imageURL = await uploadToCloudinary(files.image[0].path);
      console.log("Image URL:", imageURL);   // Make sure the URL is being received
      const profilePhoto = await uploadToCloudinary(files.profilePhoto[0].path);
      console.log("Profile Photo URL:", profilePhoto); // Check the profile photo URL
      // Create and save the new post
      const newSocial = new Social({
        title,
        name,
        datePosted,
        imageURL,
        profilePhoto,
      });
      await newSocial.save();
  
      return res.status(201).json({
        msg: "Social post created successfully",
        data: newSocial,
      });
    } catch (uploadError) {
      console.error("Cloudinary upload error:", uploadError);
      return res.status(500).json({ msg: "Failed to upload images to Cloudinary" });
    }



  } catch (error) {
    console.error("Error in createSocial:", error);
    return res
      .status(500)
      .json({ msg: "Server error while creating Social post" });
  }
};

// ✅ Delete a Social Post
export const deleteSocial = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Deleting Social post with ID: ${id}`);

    const deletedPost = await Social.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ msg: "Social post not found" });
    }

    console.log("Social post deleted successfully:", deletedPost);
    return res
      .status(200)
      .json({ msg: "Social post deleted successfully" });
  } catch (error) {
    console.error("Error deleting Social post:", error);
    return res
      .status(500)
      .json({ msg: "Server error while deleting Social post" });
  }
};

// ✅ Get All Social Posts
export const getAllSocial = async (req, res) => {
  try {
    const posts = await Social.find().sort({ createdAt: -1 });
    return res.status(200).json({ data: posts });
  } catch (error) {
    console.error("Error fetching Social posts:", error);
    return res
      .status(500)
      .json({ msg: "Failed to fetch Social posts" });
  }
};
