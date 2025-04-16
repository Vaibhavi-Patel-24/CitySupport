import mongoose from "mongoose";

const adminSocialSchema = new mongoose.Schema(
  {


    imageURL:{
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    name:{
        type: String,
        required: true,
        trim: true,
    },
    datePosted:{
        type: Date,
        required: true,
    }
  },
  {
    timestamps: true, 
  }
);

const Social = mongoose.model("Social", adminSocialSchema);

export default Social;