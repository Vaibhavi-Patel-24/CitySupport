import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Rating,
  Container,
  Grid,
  Paper,
  Card,
  CardContent
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { styled } from '@mui/material/styles';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DownloadIcon from '@mui/icons-material/Download';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs';

// Styled Components
const AlertBanner = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFF3D4',
  padding: '10px 0',
  textAlign: 'center',
  width: '100%',
}));

const PlaceSection = styled(Box)(({ theme }) => ({
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

const PlaceCard = styled(Paper)(({ theme }) => ({
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
  height: 250,
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

const PlaceImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
}));

const InfoField = styled(TextField)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: 4,
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    borderRadius: 4,
  },
  '&:hover .MuiOutlinedInput-root fieldset': {
    borderColor: theme.palette.primary.main,
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderRadius: 4,
  textTransform: 'none',
  fontWeight: 'bold',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
  },
}));

const InfoCard = styled(Card)(({ theme }) => ({
  borderRadius: 8,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(3),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
}));

const NearByPlace = () => {
  const [rating, setRating] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  // Constants for fixed place data
  const PLACE_NAME = "Wave Mall";
  const PLACE_ADDRESS = "Delhi Road, Meerut, Uttar Pradesh";
  const PLACE_CONTACT = "+91 98765 43210";

  const place = {
    name: PLACE_NAME,
    address: PLACE_ADDRESS,
    contactInfo: PLACE_CONTACT,
    image: "https://www.holidify.com/images/cmsuploads/compressed/Ahmedabadonemall_20190515120734.png",
    mapImage: "https://onefivenine.com/images/GoogleMapImages/23_0172_53.jpg"
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

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
              <Typography variant="body2">Official Website Added! Learn More!</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#FF7A00' }}>
              Happening Elections in Meerut | Follow Progress of City
            </Typography>
          </Box>
        </Container>
      </AlertBanner>

      <Container sx={{ flexGrow: 1, py: 4 }}>
        <GlobalBreadcrumbs />

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
          Near By Place
        </Typography>

        <PlaceSection>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <PhotoPlaceholder>
                <PlaceImage src={place.image} alt={place.name} />
              </PhotoPlaceholder>
            </Grid>
            <Grid item xs={12} md={6}>
              <PhotoPlaceholder>
                <PlaceImage src={place.mapImage} alt="Map" />
              </PhotoPlaceholder>
            </Grid>
          </Grid>

          <PlaceCard>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <InfoField
                  fullWidth
                  label="Place Name :"
                  variant="outlined"
                  value={PLACE_NAME}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <InfoField
                  fullWidth
                  label="Address :"
                  variant="outlined"
                  value={PLACE_ADDRESS}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <InfoField
                  fullWidth
                  label="Contact info :"
                  variant="outlined"
                  value={PLACE_CONTACT}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, pl: 1 }}>
                  <Typography component="legend" sx={{ mr: 2, fontWeight: 'medium' }}>
                    Rating
                  </Typography>
                  <Rating
                    name="place-rating"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                    size="large"
                  />
                </Box>
                <ActionButton
                  variant="contained"
                  startIcon={
                    <FavoriteIcon color={isFavorited ? 'error' : 'inherit'} />
                  }
                  onClick={() => setIsFavorited(!isFavorited)}
                  sx={{
                    bgcolor: isFavorited ? '#ffc1c1' : '#5c99d6',
                    '&:hover': {
                      bgcolor: isFavorited ? '#ff9e9e' : '#4285b4',
                    },
                    width: '100%',
                  }}
                >
                  {isFavorited ? 'Favorited' : 'Favorite'}
                </ActionButton>
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      Directions
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <DirectionsCarIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="body1">1h 10m</Typography>
                    </Box>
                  </CardContent>
                </InfoCard>
                <InfoCard>
                  <CardContent>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      Weather
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <WbSunnyIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="body1">28°C</Typography>
                    </Box>
                  </CardContent>
                </InfoCard>
                <ActionButton
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  sx={{
                    bgcolor: '#5c99d6',
                    '&:hover': { bgcolor: '#4285b4' },
                    width: '100%',
                    mt: 3
                  }}
                >
                  Download
                </ActionButton>
              </Grid>
            </Grid>
          </PlaceCard>
        </PlaceSection>
      </Container>

      <Footer />
    </Box>
  );
};

export default NearByPlace;
