// import User from '../models/User.js'; // Import the Mongoose model
// import { uploadToCloudinary } from '../services/cloudinary.js';

// export const uploadImage = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     const imageUrl = await uploadToCloudinary(req.file.path);

//     // Example: Saving image URL to MongoDB (replace with your logic)
//     const newUser = new User({
//       name: req.body.name,
//       email: req.body.email,
//       profileImage: imageUrl
//     });

//     await newUser.save();

//     res.json({ message: 'Image uploaded and saved', imageUrl, user: newUser });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
