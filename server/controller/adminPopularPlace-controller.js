// === Controller ===
import PopularPlace from "../models/popularplace.js"; // Your Popular Places model
import uploadToCloudinary from "../services/cloudinary.js";

export const createPopularPlace = async (req, res) => {
  try {
    console.log('Received request to create popular place');
    const { name } = req.body;
    console.log('Headers:', req.headers['content-type']);
    console.log('Body:', req.body);
    console.log('File:', req.file);

    if (!req.file || !name) {
      return res.status(400).json({ msg: "Name and image are required" });
    }

    const imagePath = req.file.path;
    if (imagePath) {
      const imageURL = await uploadToCloudinary(imagePath);
      console.log('Cloudinary Image URL:', imageURL);

      const newPlace = new PopularPlace({ name, imageURL });
      await newPlace.save();

      return res.status(201).json({ msg: "Popular place created successfully", data: newPlace });
    }

    return res.status(400).json({ msg: "Image upload failed" });

  } catch (error) {
    console.error("Error in createPopularPlace:", error);
    return res.status(500).json({ msg: "Server error while creating popular place" });
  }
};

export const deletePopularPlace = async (req, res) => {
  try {
    console.log('Entered deletePopularPlace controller');
    const { id } = req.params;

    console.log(`Deleting PopularPlace with ID: ${id}`);

    const deletedPlace = await PopularPlace.findByIdAndDelete(id);

    if (!deletedPlace) {
      console.error("PopularPlace not found");
      return res.status(404).json({ msg: "Popular place not found" });
    }

    console.log("Popular place deleted successfully:", deletedPlace);
    return res.status(200).json({ msg: "Popular place deleted successfully" });
  } catch (error) {
    console.error("Error deleting popular place:", error);
    return res.status(500).json({ msg: "Server error while deleting popular place" });
  }
};

export const getAllPopularPlaces = async (req, res) => {
  try {
    const places = await PopularPlace.find();
    return res.status(200).json({ data: places });
  } catch (error) {
    console.error("Error fetching popular places:", error);
    return res.status(500).json({ msg: "Failed to fetch popular places" });
  }
};
