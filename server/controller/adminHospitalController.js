import Hospital from "../models/hospitals.js"; // Adjust path if needed

// ✅ Create a Hospital
export const createHospital = async (req, res) => {
  try {
    const { name, location, mobile, email } = req.body;

    if (!name || !location || !mobile || !email) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newHospital = new Hospital({
      name,
      location,
      mobile,
      email,
    });

    await newHospital.save();

    return res.status(201).json({
      msg: "Hospital created successfully",
      data: newHospital,
    });
  } catch (error) {
    console.error("Error in createHospital:", error);
    return res.status(500).json({ msg: "Server error while creating Hospital" });
  }
};

// ✅ Delete a Hospital
export const deleteHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHospital = await Hospital.findByIdAndDelete(id);

    if (!deletedHospital) {
      return res.status(404).json({ msg: "Hospital not found" });
    }

    return res.status(200).json({ msg: "Hospital deleted successfully" });
  } catch (error) {
    console.error("Error deleting Hospital:", error);
    return res.status(500).json({ msg: "Server error while deleting Hospital" });
  }
};

// ✅ Get All Hospitals
export const getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find().sort({ createdAt: -1 });
    return res.status(200).json({ data: hospitals });
  } catch (error) {
    console.error("Error fetching Hospitals:", error);
    return res.status(500).json({ msg: "Failed to fetch Hospitals" });
  }
};
