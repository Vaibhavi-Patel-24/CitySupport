import Place from "../models/popularplace.js";
import uploadToCloudinary from "../services/cloudinary.js";

// ✅ Create a new Place
export const createPlace = async (req, res) => {
  try {
    console.log("Received request to add a place");

    const { name } = req.body;
    console.log("Name:", name);
    console.log("Headers:", req.headers["content-type"]);
    console.log("Body:", req.body);
    console.log("File:", req.file);

    if (!req.file || !name) {
      return res.status(400).json({ msg: "Name and image are required" });
    }

    const imagePath = req.file.path;

    const imageURL = await uploadToCloudinary(imagePath);
    console.log("Uploaded image URL:", imageURL);

    const newPlace = new Place({ name, image: imageURL });
    await newPlace.save();

    return res.status(201).json({ msg: "Place created successfully", data: newPlace });
  } catch (error) {
    console.error("Error in createPlace:", error);
    return res.status(500).json({ msg: "Server error while creating place" });
  }
};

// ✅ Get All Places
export const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find().sort({ createdAt: -1 });
    return res.status(200).json({ data: places });
  } catch (error) {
    console.error("Error fetching places:", error);
    return res.status(500).json({ msg: "Failed to fetch places" });
  }
};

// ✅ Delete a Place
export const deletePlace = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Deleting Place with ID: ${id}`);

    const deletedPlace = await Place.findByIdAndDelete(id);

    if (!deletedPlace) {
      return res.status(404).json({ msg: "Place not found" });
    }

    return res.status(200).json({ msg: "Place deleted successfully" });
  } catch (error) {
    console.error("Error deleting place:", error);
    return res.status(500).json({ msg: "Server error while deleting place" });
  }
};
