import Event from "../models/adminEventModel.js";  // Adjust the path if needed
import uploadToCloudinary from "../services/cloudinary.js"; // Assuming you have a cloudinary service

// ✅ Create an Event
export const createEvent = async (req, res) => {
  try {
    console.log("Got request to create Event!");
    const { title, author , eventType , date} = req.body;
    const file = req.file;

    console.log("Headers:", req.headers["content-type"]);
    console.log("Body:", req.body);
    console.log("Files:", file);

    // Validate required fields and file
    if (!file || !title || !author ||!eventType) {
      return res.status(400).json({ msg: "Title, author, and image are required" });
    }

    try {
      // Upload image to Cloudinary
      const imageURL = await uploadToCloudinary(file.path);
      console.log("Uploaded Image URL:", imageURL);

      const eventDate = date ? new Date(date) : Date.now();


      // Create and save the new event
      const newEvent = new Event({
        title,
        author,
        image: imageURL,
        eventType,        
        date: eventDate,   // <-- set date here explicitly

      });

      await newEvent.save();

      return res.status(201).json({
        msg: "Event created successfully",
        data: newEvent,
      });
    } catch (uploadError) {
      console.error("Cloudinary upload error:", uploadError);
      return res.status(500).json({ msg: "Failed to upload image to Cloudinary" });
    }
  } catch (error) {
    console.error("Error in createEvent:", error);
    return res.status(500).json({ msg: "Server error while creating Event" });
  }
};

// ✅ Delete an Event
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Deleting Event with ID: ${id}`);

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({ msg: "Event not found" });
    }

    console.log("Event deleted successfully:", deletedEvent);
    return res.status(200).json({ msg: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting Event:", error);
    return res.status(500).json({ msg: "Server error while deleting Event" });
  }
};

// ✅ Get All Events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    return res.status(200).json({ data: events });
  } catch (error) {
    console.error("Error fetching Events:", error);
    return res.status(500).json({ msg: "Failed to fetch Events" });
  }
};
