import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Typography, CircularProgress, Box,
  Grid, Card, CardContent, CardActions, IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from '../../services/api'; // Ensure your API has similar functions

const AdminMunicipal = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [municipals, setMunicipals] = useState([]);

  useEffect(() => {
    fetchMunicipals();
  }, []);

  const fetchMunicipals = async () => {
    try {
      const response = await API.getMunicipals();
      setMunicipals(response.data?.data || []);
    } catch (error) {
      console.error('Failed to fetch municipals:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    if (!name || !location || !contact || !email) {
      setMessage('All fields are required');
      setLoading(false);
      return;
    }

    const formData = { name, location, contact, email };
    console.log(formData)

    try {
      const response = await API.municipals(formData);
      if (response.data) {
        setMessage('Municipal added successfully!');
        setName('');
        setLocation('');
        setContact('');
        setEmail('');
        fetchMunicipals();
      } else {
        setMessage('Failed to add municipal');
      }
    } catch (error) {
      console.error('Error adding municipal:', error);
      setMessage('Error adding municipal');
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await API.deleteMunicipal(id);
      setMunicipals((prev) => prev.filter((m) => m._id !== id));
    } catch (error) {
      console.error('Error deleting municipal:', error);
    }
  };

  return (
    <Box sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        Add Municipal Service
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField label="Name" fullWidth margin="dense" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="Location" fullWidth margin="dense" value={location} onChange={(e) => setLocation(e.target.value)} />
        <TextField label="Contact" fullWidth margin="dense" value={contact} onChange={(e) => setContact(e.target.value)} />
        <TextField label="Email" fullWidth margin="dense" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2, backgroundColor: '#7622D7', color: 'white' }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Add Municipal'}
        </Button>
      </form>

      {message && <Typography sx={{ mt: 2, color: 'green' }}>{message}</Typography>}

      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>All Municipal Services</Typography>
        <Grid container spacing={2}>
          {municipals.map((m) => (
            <Grid item xs={12} sm={6} md={4} key={m._id}>
              <Card sx={{ maxWidth: 290, boxShadow: 3 }}>
                <CardContent>
                  <Typography sx={{ fontWeight: 600 }}>{m.name}</Typography>
                  <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>{m.location}</Typography>
                  <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>{m.contact}</Typography>
                  <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>{m.email}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton onClick={() => handleDelete(m._id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminMunicipal;
