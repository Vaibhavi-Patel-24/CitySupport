import mongoose from "mongoose";

const popularPlaceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: ""
  }
}, { timestamps: true });

export default mongoose.model("PopularPlace", popularPlaceSchema);