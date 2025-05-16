import Business from '../models/businessModel.js';

// Create Business
export const createBusiness = async (req, res) => {
  try {
    // If you want to handle image upload here, you can add it later
    const newBusiness = new Business(req.body);
    const savedBusiness = await newBusiness.save();
    res.status(201).json(savedBusiness);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Businesses
export const getAllBusiness = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Business by ID
export const deleteBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBusiness = await Business.findByIdAndDelete(id);
    if (!deletedBusiness) {
      return res.status(404).json({ message: "Business not found" });
    }
    res.status(200).json({ message: "Business deleted successfully", deletedBusiness });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
