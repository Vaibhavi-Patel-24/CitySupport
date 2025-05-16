import EventType from "../models/eventTypeModel.js";

export const createEventType = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ msg: "Event type name is required" });
    }

    const eventTypeExists = await EventType.findOne({ name });
    if (eventTypeExists) {
      return res.status(400).json({ msg: "Event type already exists" });
    }

    const newEventType = new EventType({ name });
    await newEventType.save();

    return res.status(201).json({ msg: "Event type created successfully", data: newEventType });
  } catch (error) {
    console.error("Error creating event type:", error);
    return res.status(500).json({ msg: "Server error while creating event type" });
  }
};


export const deleteEventType = async (req, res) => {
    try {
      const { id } = req.params;
      const eventType = await EventType.findByIdAndDelete(id);
  
      if (!eventType) {
        return res.status(404).json({ msg: "Event type not found" });
      }
  
      return res.status(200).json({ msg: "Event type deleted successfully" });
    } catch (error) {
      console.error("Error deleting event type:", error);
      return res.status(500).json({ msg: "Server error while deleting event type" });
    }
  };

  export const getAllEventTypes = async (req, res) => {
    try {
      const eventTypes = await EventType.find();
      return res.status(200).json({ data: eventTypes });
    } catch (error) {
      console.error("Error fetching event types:", error);
      return res.status(500).json({ msg: "Failed to fetch event types" });
    }
  };
  