import Subscriber from '../models/subscriber.js';

// POST - Add a new subscriber
export const newSubscriber = async (req, res) => {
    const { email } = req.body;

    console.log("email", email);

    try {
        // Check if email is already subscribed
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return res.status(400).json({ message: 'Email already subscribed' });
        }

        // Save to database
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();
        res.status(201).json({ message: 'Subscribed successfully!' });
    } catch (error) {
        console.error("Error subscribing:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// GET - Fetch All Subscribers
export const getSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// DELETE - Remove a subscriber
export const deleteSubscriber = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSubscriber = await Subscriber.findByIdAndDelete(id);

        if (!deletedSubscriber) {
            return res.status(404).json({ message: "Subscriber not found" });
        }

        res.status(200).json({ message: "Subscriber deleted successfully", deletedSubscriber });
    } catch (error) {
        console.error("Error deleting subscriber:", error);
        res.status(500).json({ message: "Server error" });
    }
};
