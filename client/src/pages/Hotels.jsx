import React from 'react';
import {
  Container,
  Box,
  Paper,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { styled } from '@mui/material/styles';
import Navbar from '../components/Navbar'; // Import Navbar component
import Footer from '../components/Footer'; // Import Footer component
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs';

// Custom styled components
const AlertBanner = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFF3D4',
  padding: '10px 0',
  textAlign: 'center',
  width: '100%',
}));

const HotelSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(8),
  animation: 'fadeIn 0.8s ease-in-out',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

const HotelCard = styled(Paper)(({ theme }) => ({
  borderRadius: 8,
  backgroundColor: '#f0e9e9',
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2),
  boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  },
}));

const PhotoPlaceholder = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 200,
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 4,
  overflow: 'hidden',
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

const HotelImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
}));

const InfoField = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: 20,
  padding: theme.spacing(1, 2),
  marginBottom: theme.spacing(1),
  display: 'flex',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)',
    transform: 'translateX(3px)',
  },
}));

const Hotels = () => {
  // Sample hotel data with Ahmedabad names and addresses
  const hotels = [
    {
      id: 1,
      name: "Hyatt Regency Ahmedabad",
      address: "17/A, Ashram Road, Ahmedabad, Gujarat",
      distance: "2.5 km",
      details: "4-star hotel with swimming pool",
      rating: "4.5",
      ratingCount: "345",
      price: "$120/night",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      name: "The Fern Ahmedabad",
      address: "Sola Road, S.G Highway, Ahmedabad, Gujarat",
      distance: "3.2 km",
      details: "Boutique hotel in city center",
      rating: "4.2",
      ratingCount: "276",
      price: "$95/night",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      name: "Novotel Ahmedabad",
      address: "S.G Highway, Ahmedabad, Gujarat",
      distance: "1.8 km",
      details: "Family-friendly with restaurant",
      rating: "4.7",
      ratingCount: "512",
      price: "$150/night",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
    }
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar Component */}
      <Navbar />
      
      {/* Alert Banner */}
      <AlertBanner>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ 
                backgroundColor: '#4CAF50', 
                color: 'white', 
                padding: '2px 6px', 
                borderRadius: 1, 
                fontSize: '12px',
                marginRight: 1
              }}>
                NEW
              </Box>
              <Typography variant="body2">Check out newly added Events!</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#FF7A00' }}>
              Happening Elections in Mehsana | Know insights of City
            </Typography>
          </Box>
        </Container>
      </AlertBanner>
      
      {/* Main Content */}
      <Container sx={{ flexGrow: 1, py: 4 }}>
        {/* Breadcrumbs */}
        <GlobalBreadcrumbs />
        
        {/* Hotels Header */}
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            mb: 4, 
            color: '#FF7A00', 
            fontWeight: 'bold',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: 80,
              height: 3,
              backgroundColor: '#FF7A00',
              borderRadius: 3,
            }
          }}
        >
          Hotels
        </Typography>
        
        {/* Hotel Listings */}
        <HotelSection>
          {hotels.map((hotel, index) => (
            <HotelCard 
              key={hotel.id}
              sx={{ 
                animationDelay: `${index * 0.2}s`, 
                animation: 'slideIn 0.6s ease-out forwards',
                opacity: 0,
                '@keyframes slideIn': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(20px)',
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                  <PhotoPlaceholder>
                    <HotelImage src={hotel.image} alt={hotel.name} />
                  </PhotoPlaceholder>
                </Grid>
                <Grid item xs={12} md={5}>
                  <InfoField>
                    <Typography variant="body1"><strong>Hotel Name : </strong>{hotel.name}</Typography>
                  </InfoField>
                  <InfoField>
                    <Typography variant="body1"><strong>Address : </strong>{hotel.address}</Typography>
                  </InfoField>
                  <InfoField>
                    <Typography variant="body1"><strong>Distance : </strong>{hotel.distance}</Typography>
                  </InfoField>
                  <InfoField>
                    <Typography variant="body1"><strong>Hotel Details : </strong>{hotel.details}</Typography>
                  </InfoField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <InfoField>
                    <Typography variant="body1"><strong>Rating : </strong>{hotel.rating}</Typography>
                  </InfoField>
                  <InfoField>
                    <Typography variant="body1"><strong>Rating count : </strong>{hotel.ratingCount}</Typography>
                  </InfoField>
                  <InfoField>
                    <Typography variant="body1"><strong>Price Of Hotels : </strong>{hotel.price}</Typography>
                  </InfoField>
                </Grid>
              </Grid>
            </HotelCard>
          ))}
        </HotelSection>
      </Container>
      
      {/* Footer Component */}
      <Footer />
    </Box>
  );
};

export default Hotels;