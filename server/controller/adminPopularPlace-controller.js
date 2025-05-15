import Place from '../models/popularplace.js';

// 1. Create Place
export const createPlace = async (req, res) => {
  try {
    const { title } = req.body;
    const image = req.file.path;

    const newPlace = new Place({ title, image });
    await newPlace.save();

    res.status(201).json({ message: 'Place created successfully', place: newPlace });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// 2. Get All Places
export const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// 3. Delete Place (MAKE SURE THIS EXISTS)
export const deletePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlace = await Place.findByIdAndDelete(id);

    if (!deletedPlace) {
      return res.status(404).json({ message: 'Place not found' });
    }

    res.status(200).json({ message: 'Place deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};