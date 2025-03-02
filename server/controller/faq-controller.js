import FAQ from '../models/faqModel.js';

// Create a new FAQ
export const createFAQ = async (request, response) => {
  try {
    console.log("Received FAQ Data:", request.body);

    const { title, description } = request.body;

    if (!title || !description) {
      console.error("Missing required fields");
      return response.status(400).json({ msg: "Title and description are required" });
    }

    const newFAQ = new FAQ({ title, description });

    await newFAQ.save();
    console.log("FAQ created successfully:", newFAQ);

    return response.status(201).json({ msg: "FAQ created successfully", faq: newFAQ });

  } catch (error) {
    console.error("Error creating FAQ:", error);
    return response.status(500).json({ msg: "Server error while creating FAQ" });
  }
};

// Get all FAQs
export const getFAQs = async (request, response) => {
  try {
    console.log("Fetching all FAQs...");
    const faqs = await FAQ.find();

    return response.status(200).json(faqs);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return response.status(500).json({ msg: "Server error while fetching FAQs" });
  }
};

// Update an existing FAQ
export const updateFAQ = async (req, res) => {
    try {
      // ✅ Log the received request
      console.log("Received update request:", req.body);
  
      // ✅ Validate request body
      if (!req.body || !req.body.title || !req.body.description) {
        return res.status(400).json({ msg: "Invalid data. Title and description are required." });
      }
  
      const { id } = req.params;
      const { title, description } = req.body;
  
      // ✅ Update the FAQ
      const updatedFAQ = await FAQ.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
  
      if (!updatedFAQ) {
        return res.status(404).json({ msg: "FAQ not found" });
      }
  
      return res.status(200).json({ msg: "FAQ updated successfully", faq: updatedFAQ });
  
    } catch (error) {
      console.error("Error updating FAQ:", error);
      return res.status(500).json({ msg: "Server error while updating FAQ" });
    }
  };
  

// Delete an FAQ
export const deleteFAQ = async (request, response) => {
  try {
    const { id } = request.params;

    console.log(`Deleting FAQ with ID: ${id}`);

    const deletedFAQ = await FAQ.findByIdAndDelete(id);

    if (!deletedFAQ) {
      console.error("FAQ not found");
      return response.status(404).json({ msg: "FAQ not found" });
    }

    console.log("FAQ deleted successfully:", deletedFAQ);
    return response.status(200).json({ msg: "FAQ deleted successfully" });

  } catch (error) {
    console.error("Error deleting FAQ:", error);
    return response.status(500).json({ msg: "Server error while deleting FAQ" });
  }
};
