import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const PopularPlace = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    try {
      const res = await axios.get('/api/popularplaces'); // Change path if needed
      setPlaces(res.data.data);
    } catch (err) {
      console.error("Failed to fetch places", err);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!name || !image) {
      alert("Please fill all fields");
      return;
    }
  
    const formData = new FormData();
    formData.append("name", name); // adjust to 'title' if needed
    formData.append("image", image);
  
    try {
      await axios.post('/api/popularplaces', formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setName('');
      setImage(null);
      fetchPlaces();
    } catch (err) {
      console.error("Upload failed", err.response?.data || err.message);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/popularplaces/${id}`);
      fetchPlaces();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Add Popular Place
      </Typography>
      <form onSubmit={handleUpload} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField label="Place Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" required />
        <Button type="submit" variant="contained">Upload</Button>
      </form>

      <Box mt={4}>
        <Typography variant="h6">Uploaded Places</Typography>
        <Box display="flex" flexWrap="wrap" gap={2} mt={2}>
          {places.map((place) => (
            <Card key={place._id} sx={{ width: 200 }}>
              <CardMedia
                component="img"
                height="140"
                image={place.image}
                alt={place.name}
              />
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body1">{place.name}</Typography>
                <IconButton onClick={() => handleDelete(place._id)}>
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PopularPlace;
