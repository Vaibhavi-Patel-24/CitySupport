import mongoose from "mongoose";

const adminMustVisitSchema = new mongoose.Schema(
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
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
);

const MustVisit = mongoose.model("MustVisit", adminMustVisitSchema);

export default MustVisit;
