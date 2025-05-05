import Place from '../models/popularplace.js'; // Assuming you have a PopularPlace model

// 1. Create Place - Add a new popular place
export const createPlace = async (req, res) => {
  try {
    const { name, description, location } = req.body;
    const image = req.file ? req.file.path : null; // Assuming image is uploaded via multer

    // Create a new place document in the database
    const newPlace = new Place({
      name,
      description,
      location,
      image
    });

    // Save to the database
    await newPlace.save();

    res.status(201).json({ message: 'Place created successfully', place: newPlace });
  } catch (error) {
    console.error("Error creating place:", error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// 2. Get All Places - Fetch all popular places
export const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find(); // Fetch all places from the database
    res.status(200).json(places);
  } catch (error) {
    console.error("Error fetching places:", error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// 3. Delete Place - Delete a popular place by ID
export const deletePlace = async (req, res) => {
  try {
    const { id } = req.params; // Get the place ID from the URL

    // Find and delete the place by ID
    const deletedPlace = await Place.findByIdAndDelete(id);

    if (!deletedPlace) {
      return res.status(404).json({ message: 'Place not found' });
    }

    res.status(200).json({ message: 'Place deleted successfully', deletedPlace });
  } catch (error) {
    console.error("Error deleting place:", error);
    res.status(500).json({ message: 'Server error', error });
  }
};
