import mongoose from "mongoose";

const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,  // Ensures that the name is at least 3 characters long
      maxlength: 100, // Optional: Limits the length of the name
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator: (v) => {
          return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/.test(v); // Validates that the image URL is in a valid format
        },
        message: (props) => `${props.value} is not a valid image URL!`,
      },
    },
  },
  { timestamps: true }
);

// Index the name field for better search performance (optional)
placeSchema.index({ name: 1 });

export default mongoose.model("Place", placeSchema);
