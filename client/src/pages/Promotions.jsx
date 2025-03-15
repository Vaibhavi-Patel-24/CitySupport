// CitySupport.js
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
  Paper,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs';

const CitySupport = () => {
  // City image URL
  const cityImageUrl = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=3000&q=60&fm=jpg";
  
  // Featured offers data
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

        {/* Promotion Cards Section */}
        <Container maxWidth="lg">
          <Grid container spacing={2} sx={{ mb: 5 }}>
            <Grid item xs={12} md={3}>
              <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                <Typography variant="h6" fontWeight="bold" textAlign="center">
                  EXCLUSIT TOURS
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Explore the City Like Never Before!" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Discover Hidden Gems with Our Exclusive Tours" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Limited-Time Tours to Iconic City Landmarks" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper elevation={1} sx={{ 
                p: 2, 
                height: '100%', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Typography variant="h2" fontWeight="bold" textAlign="center">
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
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                <Typography variant="h6" fontWeight="bold" textAlign="center">
                  WHAT PEOPLE ARE SAY
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" textAlign="center" sx={{ fontStyle: 'italic' }}>
                    "The discounts made the whole trip even better. We had so much fun and saved money!"
                  </Typography>
                </Box>
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
                    }
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      backgroundColor: 'grey.300',
                      backgroundImage: `url(${offer.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <CardContent sx={{ p: 2, bgcolor: '#f5f5f5', flex: 1, display: 'flex', flexDirection: 'column' }}>
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
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto', pt: 2 }}>
                      <Button 
                        variant="contained" 
                        sx={{ 
                          backgroundColor: '#3E92CC',
                          '&:hover': { backgroundColor: '#2A7AB0' },
                          borderRadius: '20px',
                        }}
                      >
                        Claim Now
                      </Button>
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