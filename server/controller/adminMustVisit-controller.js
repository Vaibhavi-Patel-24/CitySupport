// === Controller ===
import MustVisit from "../models/adminMustVisitModel.js";
import uploadToCloudinary from "../services/cloudinary.js";

export const createMustVisit = async (req, res) => {
  try {
    console.log('got request from adminMustvisit !');
    const { title, description } = req.body;
    // console.log(title);
    // console.log(description);
    // console.log(req.file)
    console.log('Headers:', req.headers['content-type']);
    console.log('Body:', req.body);
    console.log('File:', req.file);
    // Ensure req.file is present
    if (!req.file || !title || !description) {
      return res.status(400).json({ msg: "All fields including image are required" });
    }

    const imagePath = req.file ? req.file.path : '';
    if (imagePath) {
      // Proceed with Cloudinary upload
      const imageURL = await uploadToCloudinary(imagePath);
      console.log(imageURL);
      const newPlace = new MustVisit({ title, description, imageURL });
      await newPlace.save();
      return res.status(201).json({ msg: "Place created successfully", data: newPlace });
    }

    return res.status(400).json({ msg: "Image upload failed" });

  } catch (error) {
    console.error("Error in createMustVisit:", error);
    return res.status(500).json({ msg: "Server error while creating Must Visit" });
  }
};



// ✅ Delete a Must Visit Place
export const deleteMustVisit = async (request, response) => {
  try {
    console.log('Entered delete must visit controller')
    const { id } = request.params;

    console.log(`Deleting MustVisit with ID: ${id}`);

    const deletedPlace = await MustVisit.findByIdAndDelete(id);

    if (!deletedPlace) {
      console.error("MustVisit not found");
      return response.status(404).json({ msg: "MustVisit not found" });
    }

    console.log("MustVisit deleted successfully:", deletedPlace);
    return response.status(200).json({ msg: "MustVisit deleted successfully" });
  } catch (error) {
    console.error("Error deleting MustVisit:", error);
    return response.status(500).json({ msg: "Server error while deleting MustVisit" });
  }
};

export const getAllMustVisit = async (req, res) => {
  try {
    const places = await MustVisit.find();
    return res.status(200).json({ data: places });
  } catch (error) {
    console.error("Error fetching Must Visit places:", error);
    return res.status(500).json({ msg: "Failed to fetch places" });
  }
};