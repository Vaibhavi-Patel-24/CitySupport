import LocalBusiness from "../models/homelocalBusinessModel.js";
import uploadToCloudinary from "../services/cloudinary.js";

// Create a new local business
export const createLocalBusiness = async (req, res) => {
  try {
    console.log('Received request to create local business');
    const { name, description, time, smallDesc, venue } = req.body;
    
    console.log('Headers:', req.headers['content-type']);
    console.log('Body:', req.body);
    console.log('File:', req.file);
    
    // Validate required fields
    if (!req.file || !name || !description || !venue) {
      return res.status(400).json({ msg: "Name, description, venue, and image are required" });
    }

    const imagePath = req.file ? req.file.path : '';
    if (!imagePath) {
      return res.status(400).json({ msg: "Image upload failed" });
    }
    
    // Upload image to Cloudinary
    const imageURL = await uploadToCloudinary(imagePath);
    console.log("Cloudinary image URL:", imageURL);
    
    // Create new business entry
    const newBusiness = new LocalBusiness({
      name, 
      description,  
      time, 
      smallDesc, 
      venue, 
      imageURL
    });
    
    await newBusiness.save();
    return res.status(201).json({ 
      msg: "Local business created successfully", 
      data: newBusiness,
      isSuccess: true
    });

  } catch (error) {
    console.error("Error in createLocalBusiness:", error);
    return res.status(500).json({ 
      msg: "Server error while creating local business",
      isSuccess: false
    });
  }
};

// Get all local businesses
export const getAllLocalBusinesses = async (req, res) => {
  try {
    const businesses = await LocalBusiness.find().sort({ createdAt: -1 });
    return res.status(200).json({ 
      data: businesses,
      isSuccess: true
    });
  } catch (error) {
    console.error("Error fetching local businesses:", error);
    return res.status(500).json({ 
      msg: "Failed to fetch local businesses",
      isSuccess: false
    });
  }
};

// Update a local business
export const updateLocalBusiness = async (req, res) => {
  try {
    const { id, name, description, date, month, time, smallDesc, venue } = req.body;
    
    console.log(`Updating local business with ID: ${id}`);
    console.log('Body:', req.body);
    console.log('File:', req.file);
    
    // Check if business exists
    const business = await LocalBusiness.findById(id);
    if (!business) {
      return res.status(404).json({ 
        msg: "Local business not found",
        isSuccess: false
      });
    }
    
    // Update fields
    business.name = name || business.name;
    business.description = description || business.description;
    business.date = date !== undefined ? date : business.date;
    business.month = month !== undefined ? month : business.month;
    business.time = time !== undefined ? time : business.time;
    business.smallDesc = smallDesc !== undefined ? smallDesc : business.smallDesc;
    business.venue = venue || business.venue;
    
    // Update image if provided
    if (req.file) {
      const imagePath = req.file.path;
      business.imageURL = await uploadToCloudinary(imagePath);
    }
    
    await business.save();
    return res.status(200).json({ 
      msg: "Local business updated successfully", 
      data: business,
      isSuccess: true
    });
    
  } catch (error) {
    console.error("Error updating local business:", error);
    return res.status(500).json({ 
      msg: "Server error while updating local business",
      isSuccess: false
    });
  }
};

// Delete a local business
export const deleteLocalBusiness = async (req, res) => {
  try {
    console.log('Entered delete local business controller');
    const { id } = req.params;

    console.log(`Deleting local business with ID: ${id}`);

    const deletedBusiness = await LocalBusiness.findByIdAndDelete(id);

    if (!deletedBusiness) {
      console.error("Local business not found");
      return res.status(404).json({ 
        msg: "Local business not found",
        isSuccess: false
      });
    }

    console.log("Local business deleted successfully:", deletedBusiness);
    return res.status(200).json({ 
      msg: "Local business deleted successfully",
      isSuccess: true
    });
  } catch (error) {
    console.error("Error deleting local business:", error);
    return res.status(500).json({ 
      msg: "Server error while deleting local business",
      isSuccess: false
    });
  }
};

// Get a specific local business by ID
export const getLocalBusinessById = async (req, res) => {
  try {
    const { id } = req.params;
    const business = await LocalBusiness.findById(id);
    
    if (!business) {
      return res.status(404).json({ 
        msg: "Local business not found",
        isSuccess: false
      });
    }
    
    return res.status(200).json({ 
      data: business,
      isSuccess: true
    });
  } catch (error) {
    console.error("Error fetching local business:", error);
    return res.status(500).json({ 
      msg: "Failed to fetch local business",
      isSuccess: false
    });
  }
};