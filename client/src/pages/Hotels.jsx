import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Button,
  Paper,
  Grid,
  Breadcrumbs,
  Link,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { styled } from '@mui/material/styles';

// Custom styled components
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'black',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '16px',
  margin: '0 5px',
}));

const AlertBanner = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFF3D4',
  padding: '10px 0',
  textAlign: 'center',
  width: '100%',
}));

const HotelSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(8),
}));

const HotelCard = styled(Paper)(({ theme }) => ({
  borderRadius: 8,
  backgroundColor: '#f0e9e9',
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2),
  boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1)',
}));

const PhotoPlaceholder = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 200,
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 4,
}));

const InfoField = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: 20,
  padding: theme.spacing(1, 2),
  marginBottom: theme.spacing(1),
  display: 'flex',
}));

const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'white',
  padding: theme.spacing(6, 0),
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  border: '1px solid white',
  margin: theme.spacing(0, 1),
}));

const SubscribeButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF7A00',
  color: 'white',
  '&:hover': {
    backgroundColor: '#FF9A40',
  },
  padding: '10px',
  marginTop: '10px',
  width: '100%',
}));

const CitySupport = () => {
  // Sample hotel data
  const hotels = [
    {
      id: 1,
      name: "Hotel Name 1",
      address: "Address 1",
      distance: "2.5 km",
      details: "4-star hotel with swimming pool",
      rating: "4.5",
      ratingCount: "345",
      price: "$120/night"
    },
    {
      id: 2,
      name: "Hotel Name 2",
      address: "Address 2",
      distance: "3.2 km",
      details: "Boutique hotel in city center",
      rating: "4.2",
      ratingCount: "276",
      price: "$95/night"
    },
    {
      id: 3,
      name: "Hotel Name 3",
      address: "Address 3",
      distance: "1.8 km",
      details: "Family-friendly with restaurant",
      rating: "4.7",
      ratingCount: "512",
      price: "$150/night"
    }
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="static" color="transparent" elevation={0}>
        <StyledToolbar>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/logo.png" 
              alt="City Support" 
              style={{ height: 60, width: 60, marginRight: 10 }}
            />
            <Typography variant="h6" sx={{ color: '#FF7A00', fontWeight: 'bold' }}>
              CITY SUPPORT
            </Typography>
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavButton>Home</NavButton>
            <NavButton>Tourism</NavButton>
            <NavButton>Utility</NavButton>
            <NavButton>Events</NavButton>
            <NavButton>Services</NavButton>
            <NavButton>Map</NavButton>
            <NavButton>Social</NavButton>
            <NavButton>Help</NavButton>
          </Box>
          
          <Box sx={{ display: 'flex' }}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </StyledToolbar>
      </AppBar>
      
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
              Happening Elections in Mohsana | Know insights of City
            </Typography>
          </Box>
        </Container>
      </AlertBanner>
      
      {/* Main Content */}
      <Container sx={{ flexGrow: 1, py: 4 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 4 }}
        >
          <Link 
            color="inherit" 
            href="/" 
            sx={{ textDecoration: 'none', color: '#FF7A00' }}
          >
            Home
          </Link>
          <Link 
            color="inherit" 
            href="/tourism" 
            sx={{ textDecoration: 'none', color: '#FF7A00' }}
          >
            Tourisism
          </Link>
          <Typography color="#FF7A00">Near By Place</Typography>
        </Breadcrumbs>
        
        {/* Hotels Section */}
        <HotelSection>
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              color: '#FF7A00', 
              fontWeight: 'bold', 
              mb: 4 
            }}
          >
            Hotels
          </Typography>
          
          {/* Hotel Cards */}
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id}>
              <Grid container spacing={2}>
                {/* Photo Column */}
                <Grid item xs={12} md={3}>
                  <PhotoPlaceholder>
                    <Typography variant="h5" sx={{ color: '#333' }}>
                      Photo
                    </Typography>
                  </PhotoPlaceholder>
                </Grid>
                
                {/* Details Column */}
                <Grid item xs={12} md={5}>
                  <InfoField>
                    <Typography variant="body1" sx={{ fontWeight: 'medium', mr: 1 }}>
                      Hotel Name :
                    </Typography>
                    <Typography variant="body1">
                      {hotel.name}
                    </Typography>
                  </InfoField>
                  
                  <InfoField>
                    <Typography variant="body1" sx={{ fontWeight: 'medium', mr: 1 }}>
                      Address :
                    </Typography>
                    <Typography variant="body1">
                      {hotel.address}
                    </Typography>
                  </InfoField>
                  
                  <InfoField>
                    <Typography variant="body1" sx={{ fontWeight: 'medium', mr: 1 }}>
                      Distance :
                    </Typography>
                    <Typography variant="body1">
                      {hotel.distance}
                    </Typography>
                  </InfoField>
                  
                  <InfoField>
                    <Typography variant="body1" sx={{ fontWeight: 'medium', mr: 1 }}>
                      Hotel Details :
                    </Typography>
                    <Typography variant="body1">
                      {hotel.details}
                    </Typography>
                  </InfoField>
                </Grid>
                
                {/* Rating/Price Column */}
                <Grid item xs={12} md={4}>
                  <InfoField>
                    <Typography variant="body1" sx={{ fontWeight: 'medium', mr: 1 }}>
                      Rating :
                    </Typography>
                    <Typography variant="body1">
                      {hotel.rating}
                    </Typography>
                  </InfoField>
                  
                  <InfoField>
                    <Typography variant="body1" sx={{ fontWeight: 'medium', mr: 1 }}>
                      Rating count :
                    </Typography>
                    <Typography variant="body1">
                      {hotel.ratingCount}
                    </Typography>
                  </InfoField>
                  
                  <InfoField>
                    <Typography variant="body1" sx={{ fontWeight: 'medium', mr: 1 }}>
                      Price Of Hotels :
                    </Typography>
                    <Typography variant="body1">
                      {hotel.price}
                    </Typography>
                  </InfoField>
                </Grid>
              </Grid>
            </HotelCard>
          ))}
        </HotelSection>
      </Container>
      
      {/* Footer */}
      <Footer>
        <Container>
          <Grid container spacing={4}>
            {/* Navigation Links */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                  <Typography 
                    variant="subtitle1" 
                    component="h3" 
                    sx={{ color: '#1E88E5', mb: 2 }}
                  >
                    Home
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>Utility</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>Events</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>Social</Typography>
                </Grid>
                
                <Grid item xs={6} sm={3}>
                  <Typography 
                    variant="subtitle1" 
                    component="h3" 
                    sx={{ color: '#1E88E5', mb: 2 }}
                  >
                    Tourism
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>Transports</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>Local Business</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>Gallery</Typography>
                </Grid>
                
                <Grid item xs={6} sm={3}>
                  <Typography 
                    variant="subtitle1" 
                    component="h3" 
                    sx={{ color: '#1E88E5', mb: 2 }}
                  >
                    Contact Us
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>Promotions</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>Services</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>Register Business</Typography>
                </Grid>
              </Grid>
            </Grid>
            
            {/* Logo and Newsletter */}
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              <Box sx={{ mb: 3 }}>
                <img 
                  src="/logo.png" 
                  alt="City Support" 
                  style={{ height: 100, width: 100 }}
                />
                <Typography 
                  variant="h6" 
                  sx={{ color: '#FF7A00', mt: 1 }}
                >
                  CITY SUPPORT
                </Typography>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Subscribe to our Newsletter
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Subscribe to our Newsletter"
                  variant="outlined"
                  size="small"
                  sx={{ 
                    backgroundColor: 'white',
                    borderRadius: 1,
                    mb: 1
                  }}
                />
                <SubscribeButton variant="contained">
                  SUBSCRIBE
                </SubscribeButton>
              </Box>
            </Grid>
          </Grid>
          
          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
            <SocialIconButton aria-label="LinkedIn">
              <LinkedInIcon />
            </SocialIconButton>
            <SocialIconButton aria-label="Facebook">
              <FacebookIcon />
            </SocialIconButton>
            <SocialIconButton aria-label="Instagram">
              <InstagramIcon />
            </SocialIconButton>
            <SocialIconButton aria-label="YouTube">
              <YouTubeIcon />
            </SocialIconButton>
          </Box>
          
          {/* Copyright */}
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
              Copyright © 2024 CitySupport
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
              All Rights Reserved
            </Typography>
          </Box>
        </Container>
      </Footer>
    </Box>
  );
};

export default CitySupport;