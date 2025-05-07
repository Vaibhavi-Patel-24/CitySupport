import Municipal from "../models/municipals.js"; 

// ✅ Create a Municipal
export const createMunicipal = async (req, res) => {
  try {
    const { name, location, contact, email } = req.body;
    console.log(req.body)
    if (!name || !location || !contact || !email) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    console.log('creating the newMunicipal')
    const newMunicipal = new Municipal({
      name,
      location,
      contact,
      email,
    });
    console.log('going to save the data in municipal cloud')
    await newMunicipal.save();

    return res.status(201).json({
      msg: "Municipal created successfully",
      data: newMunicipal,
    });
  } catch (error) {
    console.error("Error in createMunicipal:", error);
    return res.status(500).json({ msg: "Server error while creating Municipal" });
  }
};

// ✅ Delete a Municipal
export const deleteMunicipal = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMunicipal = await Hospital.findByIdAndDelete(id);

    if (!deletedMunicipal) {
      return res.status(404).json({ msg: "Municipal not found" });
    }

    return res.status(200).json({ msg: "Municipal deleted successfully" });
  } catch (error) {
    console.error("Error deleting Municipal:", error);
    return res.status(500).json({ msg: "Server error while deleting Municipal" });
  }
};

// ✅ Get All Municipal
export const getAllMunicipals = async (req, res) => {
  try {
    const municipal = await Municipal.find().sort({ createdAt: -1 });
    return res.status(200).json({ data: municipal });
  } catch (error) {
    console.error("Error fetching Municipal:", error);
    return res.status(500).json({ msg: "Failed to fetch Municipal" });
  }
};
