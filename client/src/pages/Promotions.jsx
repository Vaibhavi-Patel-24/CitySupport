import React from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Box, 
  Typography,
  Paper
} from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs';
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs';

const CitySupport = () => {
  // City image URL
  const cityImageUrl = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=3000&q=60&fm=jpg";
  
  // Image URLs for cards
  const leftImageUrl = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6eb03530811457.5605884ca0d24.jpg";
  const rightImageUrl = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/special-offer-ads-design-template-f93f027e3b67d4a472a2dde3eaa9ad65_screen.jpg?ts=1651135986";
  
  // Featured offers data without ad indicators
  const featuredOffers = [
    {
      name: "Exclusive City Tours",
      details: "Only available for a limited time—take advantage of exclusive offers while they last!",
      rating: "9.2",
      status: "Open",
      image: "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHklMjB0b3VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Discount Dining",
      details: "Experience the best local flavors with exclusive dining deals just for you.",
      rating: "8.7",
      status: "Open/Close",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Customer Testimonials",
      details: "The dining discounts were amazing! We tried so many local restaurants and saved a lot of money.",
      rating: "9.5",
      status: "Open/Close",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    }
  ];

  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div className="content" style={{ flex: 1 }}>
      <GlobalBreadcrumbs/>
        
        {/* Hero Banner Section */}
        <Box 
          sx={{ 
            height: 300, 
            backgroundImage: `url(${cityImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            mb: 4,
            position: 'relative'
          }}
        >
          {/* Overlay for better text visibility */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.3)'
          }} />
          
          <Typography variant="h2" sx={{ color: 'white', zIndex: 1, fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Discover Our City
          </Typography>
        </Box>

        {/* Information Cards Section */}
        <Container maxWidth="lg">
          <Grid container spacing={2} sx={{ mb: 5 }}>
            {/* Left Image */}
            <Grid item xs={12} md={3}>
              <Paper 
                elevation={3} 
                sx={{ 
                  height: '300px', // Fixed height to match middle card
                  overflow: 'hidden',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Box 
                  component="img"
                  src={leftImageUrl}
                  alt="Special Offer"
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Paper>
            </Grid>
            
            {/* Middle Promotion Card with Blurred Background */}
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 2, 
                  height: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.4s ease',
                  },
                  '&:hover::before': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(0px)',
                  }
                }}
              >
                {/* Promo content - always visible but adjusted on hover */}
                <Box sx={{ 
                  position: 'relative',
                  zIndex: 2,
                  textAlign: 'center'
                }}>
                  <Typography variant="h2" fontWeight="bold" textAlign="center" color="red">
                    75% off
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" textAlign="center">
                    ON LOCAL TOURS
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h5" fontWeight="bold" textAlign="center">
                      LOCAL DURATIONS
                    </Typography>
                  </Box>
                  <Button 
                    variant="contained" 
                    sx={{ 
                      mt: 2, 
                      bgcolor: 'red', 
                      '&:hover': { bgcolor: 'darkred' },
                      fontWeight: 'bold',
                      position: 'relative',
                      zIndex: 3,
                    }}
                  >
                    CLAIM NOW
                  </Button>
                </Box>
              </Paper>
            </Grid>
            
            {/* Right Image */}
            <Grid item xs={12} md={3}>
              <Paper 
                elevation={3} 
                sx={{ 
                  height: '300px', // Fixed height to match middle card
                  overflow: 'hidden',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Box 
                  component="img"
                  src={rightImageUrl}
                  alt="Special Offer"
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Paper>
            </Grid>
          </Grid>

          {/* View All Places Section */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4" sx={{ color: 'orange' }}>Featured Offers</Typography>
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
              View All Offers
            </Button>
          </Box>

          {/* Three Features Section */}
          <Grid container spacing={3} sx={{ mb: 5 }}>
            {featuredOffers.map((offer, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
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
                    },
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)'
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
                        backgroundImage: `url(${offer.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                      <Typography variant="h6">Name: {offer.name}</Typography>
                      <Typography variant="body2">Details: {offer.details}</Typography>
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
                          {offer.rating}
                        </Button>
                      </Box>
                      <Typography variant="body2">{offer.status}</Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button 
                          variant="contained" 
                          sx={{ 
                            backgroundColor: '#3E92CC',
                            '&:hover': { backgroundColor: '#2A7AB0' },
                            borderRadius: '20px',
                          }}
                        >
                          {index === 2 ? 'Read More' : 'Claim Now'}
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default CitySupport;