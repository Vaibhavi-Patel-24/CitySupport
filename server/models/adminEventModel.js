import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String, // or ObjectId if linked to a User collection
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  }
}, { timestamps: true });

export default mongoose.model('Event', eventSchema);
