import React, { useState, useEffect, useRef } from 'react';
import { TextField, Button, Typography, CircularProgress, Box, Grid, Card, CardContent, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from '../../services/api'; // Ensure this API service includes the endpoints


const AdminHospital = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [hospitals, setHospitals] = useState([]);
  
  // Load the hospitals when the component mounts
  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {
    try {
      const response = await API.getHospitals(); // Ensure this API call is correct
      setHospitals(response.data?.data || []);
    } catch (error) {
      console.error('Failed to fetch hospitals:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    if (!name || !location || !mobile || !email) {
      setMessage('All fields are required');
      setLoading(false);
      return;
    }

    const formData = { name, location, mobile, email };
    
    try {
      const response = await API.hospitals(formData); // Ensure this API call is correct
      if (response.data) {
        setMessage('Hospital added successfully!');
        setName('');
        setLocation('');
        setMobile('');
        setEmail('');
        fetchHospitals(); // Refresh the list after adding a hospital
      } else {
        setMessage('Failed to add hospital');
      }
    } catch (error) {
      console.error('Error adding hospital:', error);
      setMessage('Error adding hospital');
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await API.deleteHospital(id); // Ensure this API call is correct
      setHospitals((prev) => prev.filter((hospital) => hospital._id !== id));
    } catch (error) {
      console.error('Error deleting hospital:', error);
    }
  };

  return (
    <Box sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        Add Hospital
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Hospital Name"
          variant="outlined"
          fullWidth
          margin="dense"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          margin="dense"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <TextField
          label="Mobile"
          variant="outlined"
          fullWidth
          margin="dense"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="dense"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          variant="contained"
          sx={{ marginTop: 2, backgroundColor: '#7622D7', color: 'white' }}
          type="submit"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Add Hospital'}
        </Button>
      </form>

      {message && <Typography sx={{ marginTop: 2, color: 'green' }}>{message}</Typography>}

      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          All Hospitals
        </Typography>

        <Grid container spacing={2}>
          {hospitals.map((hospital) => (
            <Grid item xs={12} sm={6} md={4} key={hospital._id}>
              <Card sx={{ maxWidth: 290, boxShadow: 3 }}>
                <CardContent>
                  <Typography sx={{ fontWeight: 600 }}>
                    {hospital.name}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
                    {hospital.location}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
                    {hospital.mobile}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
                    {hospital.email}
                  </Typography>
                </CardContent>

                <CardActions>
                  <IconButton
                    onClick={() => handleDelete(hospital._id)}
                    color="error"
                    sx={{ '&:hover': { backgroundColor: '#ffe6e6' } }}
                  >
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

export default AdminHospital;
