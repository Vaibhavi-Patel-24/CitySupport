import mongoose from "mongoose";

const localBusinessSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      trim: true,
    },
    smallDesc: {
      type: String,
      trim: true,
    },
    venue: {
      type: String,
      required: true,
      trim: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const LocalBusiness = mongoose.model("LocalBusiness", localBusinessSchema);

export default LocalBusiness;