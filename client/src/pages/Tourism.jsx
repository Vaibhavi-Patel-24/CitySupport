import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs';

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
        <GlobalBreadcrumbs/>

          {/* Near By Place Section with View All Button */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4" sx={{ color: 'orange' }}>Near By Place</Typography>
            <Button 
              variant="contained" 
              sx={{ 
                backgroundColor: '#1976d2', 
                borderRadius: '20px',
                '&:hover': {
                  backgroundColor: '#1565c0'
                }
              }}
            >
              View All Places
            </Button>
          </Box>
          
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {nearByPlaces.map((place, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'visible',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: '10px',
                      left: '10px',
                      zIndex: -1,
                      borderRadius: 2,
                      backgroundColor: '#f5f5f5'
                    }
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
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                      <Typography variant="h6">Name : {place.name}</Typography>
                      <Typography variant="body2">Details : {place.details}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                        <Typography variant="body2" sx={{ mr: 1 }}>Rating</Typography>
                        <Button 
                          variant="contained" 
                          size="small" 
                          disableElevation
                          sx={{ 
                            borderRadius: '15px', 
                            backgroundColor: 'rgba(255, 255, 255, 0.5)', 
                            color: 'black', 
                            minWidth: 0, 
                            px: 1.5 
                          }}
                        >
                          {place.rating}
                        </Button>
                      </Box>
                      <Typography variant="body2">open /close</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Hotels Section with View All Button */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ color: 'orange' }}>Hotels</Typography>
            <Link to="/citysupport/Hotels" style={{ textDecoration: 'none' }}>
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#1976d2', 
                  borderRadius: '20px',
                  '&:hover': {
                    backgroundColor: '#1565c0'
                  }
                }}
              >
                VIEW ALL HOTELS
              </Button>
            </Link>
          </Box>
          
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {hotels.map((hotel, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'visible',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: '10px',
                      left: '10px',
                      zIndex: -1,
                      borderRadius: 2,
                      backgroundColor: '#f5f5f5'
                    }
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
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                      <Typography variant="h6">Name : {hotel.name}</Typography>
                      <Typography variant="body2">Details : {hotel.details}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                        <Typography variant="body2" sx={{ mr: 1 }}>Rating</Typography>
                        <Button 
                          variant="contained" 
                          size="small" 
                          disableElevation
                          sx={{ 
                            borderRadius: '15px', 
                            backgroundColor: 'rgba(255, 255, 255, 0.5)', 
                            color: 'black', 
                            minWidth: 0, 
                            px: 1.5 
                          }}
                        >
                          {hotel.rating}
                        </Button>
                      </Box>
                      <Typography variant="body2">open /close</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Public Transport Section */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              mb: 3,
              mt: 4,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '0',
                right: '0',
                top: '-20px',
                height: '1px',
                backgroundColor: '#e0e0e0'
              }
            }}
          >
            <Typography variant="h5" sx={{ color: 'orange' }}>Public Transport</Typography>
          </Box>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <FormControl 
                    fullWidth 
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '0',
                        backgroundColor: '#f1e7e7',
                        '& fieldset': {
                          border: 'none'
                        }
                      },
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid transparent',
                        borderTop: '10px solid black',
                        pointerEvents: 'none'
                      }
                    }}
                  >
                    <InputLabel sx={{ backgroundColor: '#f1e7e7', px: 1 }}>Starting Point</InputLabel>
                    <Select
                      value={startingPoint}
                      onChange={(e) => setStartingPoint(e.target.value)}
                      IconComponent={() => null}
                    >
                      <MenuItem value="point1">Point 1</MenuItem>
                      <MenuItem value="point2">Point 2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                  <FormControl 
                    fullWidth 
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '0',
                        backgroundColor: '#f1e7e7',
                        '& fieldset': {
                          border: 'none'
                        }
                      },
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid transparent',
                        borderTop: '10px solid black',
                        pointerEvents: 'none'
                      }
                    }}
                  >
                    <InputLabel sx={{ backgroundColor: '#f1e7e7', px: 1 }}>Destination</InputLabel>
                    <Select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      IconComponent={() => null}
                    >
                      <MenuItem value="dest1">Destination 1</MenuItem>
                      <MenuItem value="dest2">Destination 2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                  <FormControl 
                    fullWidth 
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '0',
                        backgroundColor: '#f1e7e7',
                        '& fieldset': {
                          border: 'none'
                        }
                      },
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid transparent',
                        borderTop: '10px solid black',
                        pointerEvents: 'none'
                      }
                    }}
                  >
                    <InputLabel sx={{ backgroundColor: '#f1e7e7', px: 1 }}>Type Of Transport</InputLabel>
                    <Select
                      value={transportType}
                      onChange={(e) => setTransportType(e.target.value)}
                      IconComponent={() => null}
                    >
                      <MenuItem value="bus">Bus</MenuItem>
                      <MenuItem value="train">Train</MenuItem>
                      <MenuItem value="taxi">Taxi</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item xs={12} md={12}>
              <Grid container spacing={2} sx={{ mt: 2 }}>
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