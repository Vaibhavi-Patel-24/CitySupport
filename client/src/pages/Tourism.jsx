import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField
} from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Tourism = () => {
  const [startingPoint, setStartingPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [transportType, setTransportType] = useState('');

  const nearByPlaces = [
    {
      name: 'The Great Wall of China',
      details: 'One of the longest structures ever built, this ancient series of fortifications is a testament to Chinese engineering and history.',
      rating: '9.5',
      status: 'Open',
      image: 'https://plus.unsplash.com/premium_photo-1694475385208-8215484816a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdyZWF0JTIwd2FsbCUyMG9mJTIwY2hpbmF8ZW58MHx8MHx8fDA%3D' 
    },
    {
      name: 'Machu Picchu',
      details: 'A stunning panoramic view of Machu Picchu, showcasing its majestic architecture and natural surroundings.',
      rating: '9.8',
      status: 'Open/Close',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1280px-Machu_Picchu%2C_Peru.jpg'
    },
    {
      name: 'Colosseum at Sunset',
      details: 'A beautiful view of the Colosseum during sunset, showcasing its ancient architecture.',
      rating: '9.5',
      status: 'Open/Close',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/1280px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg'
    }
  ];

  const hotels = [
    {
      name: 'ITC Narmada, a Luxury Collection Hotel,',
      details: ': A luxurious 5-star hotel offering opulent rooms, fine dining options, and top-notch amenities.',
      rating: '8.9',
      status: 'Open/Close',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/590624878.jpg?k=e37f3c7c53aa72f914e07d473b59ebd0290e82ccc8a28079c2d773acd452885a&o=&hp=1'
    },
    {
      name: 'The Fern Ahmedabad Hotel',
      details: 'An eco-friendly hotel providing contemporary accommodations, multiple dining venues, and modern facilities',
      rating: '8.4',
      status: 'Open/Close',
      image: 'https://images4.via.com/static/hotel/images/10/228927/228927_0_f.jpg'
    },
    {
      name: 'Hyatt Regency Ahmedabad',
      details: ' A 5-star hotel overlooking the Sabarmati River, offering contemporary rooms, multiple dining options, and exceptional service.',
      rating: '8.3',
      status: 'Open/Close',
      image: 'https://lh5.googleusercontent.com/p/AF1QipOYpRHZPa0sDbony3cK80KziM037kGYuBRtHiUt=w324-h312-n-k-no'
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <div className="content">
        <Container maxWidth="lg" sx={{ py: 3, flex: 1 }}>
          {/* Breadcrumb */}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, color: 'orange' }}>
            Home &gt; Tourism
          </Typography>

          {/* Near By Place Section */}
          <Typography variant="h4" sx={{ mb: 3, color: 'orange' }}>Near By Place</Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {nearByPlaces.map((place, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    boxShadow: 'none',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Box
                      sx={{
                        height: 200,
                        backgroundColor: 'grey.300',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundImage: `url(${place.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      {!place.image && 'Place Photo'}
                    </Box>
                    <Box sx={{ p: 2 }}>
                      <Typography variant="h6">{place.name}</Typography>
                      <Typography variant="body2">Details: {place.details}</Typography>
                      <Typography variant="body2">Rating: {place.rating}</Typography>
                      <Typography variant="body2">Status: {place.status}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Hotels Section */}
          <Typography variant="h5" sx={{ mb: 3, color: 'orange' }}>Hotels</Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {hotels.map((hotel, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    boxShadow: 'none',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Box
                      sx={{
                        height: 200,
                        backgroundColor: 'grey.300',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundImage: `url(${hotel.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      {!hotel.image && 'Place Photo'}
                    </Box>
                    <Box sx={{ p: 2 }}>
                      <Typography variant="h6">{hotel.name}</Typography>
                      <Typography variant="body2">Details: {hotel.details}</Typography>
                      <Typography variant="body2">Rating: {hotel.rating}</Typography>
                      <Typography variant="body2">Status: {hotel.status}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Public Transport Section */}
          <Typography variant="h5" sx={{ mb: 3, color: 'orange' }}>Public Transport</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Starting Point</InputLabel>
                  <Select
                    value={startingPoint}
                    label="Starting Point"
                    onChange={(e) => setStartingPoint(e.target.value)}
                  >
                    <MenuItem value="point1">Point 1</MenuItem>
                    <MenuItem value="point2">Point 2</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth variant="outlined">
                  <InputLabel>Destination</InputLabel>
                  <Select
                    value={destination}
                    label="Destination"
                    onChange={(e) => setDestination(e.target.value)}
                  >
                    <MenuItem value="dest1">Destination 1</MenuItem>
                    <MenuItem value="dest2">Destination 2</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth variant="outlined">
                  <InputLabel>Type of Transport</InputLabel>
                  <Select
                    value={transportType}
                    label="Type of Transport"
                    onChange={(e) => setTransportType(e.target.value)}
                  >
                    <MenuItem value="bus">Bus</MenuItem>
                    <MenuItem value="train">Train</MenuItem>
                    <MenuItem value="taxi">Taxi</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      height: 200,
                      backgroundColor: 'grey.300',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 2
                    }}
                  >
                    Photo of Transport Type
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      height: 200,
                      backgroundColor: 'grey.300',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 2
                    }}
                  >
                    Location Map
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Event Section */}
          <Box
            sx={{
              textAlign: 'center',
              mt: 4,
              py: 3,
              backgroundColor: 'grey.100',
              borderRadius: 2
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              For Event Information
            </Typography>
            <Button variant="contained" color="primary">
              Click Me
            </Button>
          </Box>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Tourism;