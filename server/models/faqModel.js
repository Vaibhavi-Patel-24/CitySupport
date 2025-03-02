import mongoose from "mongoose";

const faqSchema = new mongoose.Schema(
  {
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
  { timestamps: true } // Adds createdAt and updatedAt timestamps automatically
);

const FAQ = mongoose.model("FAQ", faqSchema);

export default FAQ;
