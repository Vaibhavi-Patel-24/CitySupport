import Subscriber from '../models/subscriber.js';

export const newSubscriber = async (req, res) => {
    const { email } = req.body;

    console.log("email",email)

    // Check if email is already subscribed
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
        return res.status(400).json({ message: 'Email already subscribed' });
    }

    // Save to database
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(201).json({ message: 'Subscribed successfully!' });
};

// GET - Fetch All Emails (Admin Panel)
export const getSubscriber = async (req, res) => {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
};

