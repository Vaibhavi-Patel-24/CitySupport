import Electricity from '../models/electricity.js'
// ✅ Create a Electricity
export const createEelectricity = async (req, res) => {
  try {
    const { name, location, contact, email } = req.body;
    console.log(req.body)
    if (!name || !location || !contact || !email) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    console.log('creating the newEelectricity')
    const newElectricity = new Electricity({
      name,
      location,
      contact,
      email,
    });
    console.log('going to save the data in Eelectricity cloud')
    await newElectricity.save();

    return res.status(201).json({
      msg: "Eelectricity created successfully",
      data: newElectricity,
    });
  } catch (error) {
    console.error("Error in createEelectricity:", error);
    return res.status(500).json({ msg: "Server error while creating Eelectricity" });
  }
};

// ✅ Delete a Electricity
export const deleteEelectricity = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedElectricity = await Electricity.findByIdAndDelete(id);

    if (!deletedElectricity) {
      return res.status(404).json({ msg: "Eelectricity not found" });
    }

    return res.status(200).json({ msg: "Eelectricity deleted successfully" });
  } catch (error) {
    console.error("Error deleting Eelectricity:", error);
    return res.status(500).json({ msg: "Server error while deleting Eelectricity" });
  }
};

// ✅ Get All Electricity
export const getAllEelectricity = async (req, res) => {
  try {
    const electricity = await Electricity.find().sort({ createdAt: -1 });
    return res.status(200).json({ data: electricity });
  } catch (error) {
    console.error("Error fetching Eelectricity:", error);
    return res.status(500).json({ msg: "Failed to fetch Eelectricity" });
  }
};
