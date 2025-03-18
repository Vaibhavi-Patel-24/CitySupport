import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Card, 
  CardContent, 
  Container, 
  Grid, 
  Rating, 
  Button, 
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Breadcrumbs,
  Link,
  Alert,
  Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const NearByPlacePage = () => {
  const [value, setValue] = useState(0);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src="/logo.png" alt="City Support Logo" width="80" height="80" />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 2 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Tourism</Button>
            <Button color="inherit">Utility</Button>
            <Button color="inherit">Events</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Map</Button>
            <Button color="inherit">Social</Button>
            <Button color="inherit">Help</Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Alert Banner */}
      <Alert icon={false} severity="info" sx={{ bgcolor: '#FFECD1', color: '#FF4500' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Box>
            <Typography variant="body2" component="span" sx={{ bgcolor: '#7FFF00', px: 1, mr: 1, borderRadius: 1 }}>NEW</Typography>
            Check out newly added Events !
          </Box>
          <Box>
            Happening Elections in Mehsana | Know insights of City
          </Box>
        </Box>
      </Alert>

      {/* Breadcrumbs Navigation */}
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/tourism">
            Tourisum
          </Link>
          <Typography color="text.primary">Near By Place</Typography>
        </Breadcrumbs>
      </Container>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Typography variant="h4" component="h1" color="#FF6B35" sx={{ mb: 4 }}>
          Near By Place
        </Typography>

        <Grid container spacing={3}>
          {/* Place Image and Map */}
          <Grid item xs={12}>
            <Paper elevation={0} sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <img 
                    src="/wide-angle.jpg" 
                    alt="Place" 
                    style={{ width: '100%', height: 'auto', borderRadius: 8 }} 
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <img 
                    src="/map.jpg" 
                    alt="Map" 
                    style={{ width: '100%', height: '100%', borderRadius: 8 }} 
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mt: 2 }}>
                {/* Left Column - Place Details */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Place Name"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      sx: { backgroundColor: 'white', borderRadius: 2 }
                    }}
                    sx={{ mb: 2 }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Address"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      sx: { backgroundColor: 'white', borderRadius: 2 }
                    }}
                    sx={{ mb: 2 }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Contact info"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      sx: { backgroundColor: 'white', borderRadius: 2 }
                    }}
                    sx={{ mb: 2 }}
                  />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', p: 2, borderRadius: 2 }}>
                    <Typography component="legend" sx={{ mr: 2 }}>Rating</Typography>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </Grid>
                
                {/* Right Column - Directions and Weather */}
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2, backgroundColor: 'white', borderRadius: 2, mb: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Directions
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <DirectionsCarIcon color="primary" />
                      <Typography variant="body1" sx={{ ml: 1 }}>
                        1h 10m
                      </Typography>
                    </Box>
                  </Paper>
                  
                  <Paper sx={{ p: 2, backgroundColor: 'white', borderRadius: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Weather
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <WbSunnyIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h5">
                        28°C
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>

              {/* Action Buttons */}
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6}>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    startIcon={<FavoriteIcon />}
                    sx={{ 
                      py: 2, 
                      backgroundColor: '#5D9CEC',
                      '&:hover': {
                        backgroundColor: '#4A89DC',
                      } 
                    }}
                  >
                    Favorite
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    startIcon={<DownloadIcon />}
                    sx={{ 
                      py: 2, 
                      backgroundColor: '#5D9CEC',
                      '&:hover': {
                        backgroundColor: '#4A89DC',
                      } 
                    }}
                  >
                    Dowload
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: 'black', color: 'white', mt: 8, pt: 4, pb: 2 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Footer Links - Column 1 */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Link href="/" color="inherit" underline="hover">
                  Home
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Link href="/utility" color="inherit" underline="hover">
                  Utility
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Link href="/events" color="inherit" underline="hover">
                  Events
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Link href="/social" color="inherit" underline="hover">
                  Social
                </Link>
              </Typography>
            </Grid>

            {/* Footer Links - Column 2 */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Link href="/tourism" color="inherit" underline="hover">
                  Tourism
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Link href="/transports" color="inherit" underline="hover">
                  Transports
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Link href="/local-business" color="inherit" underline="hover">
                  Local Business
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Link href="/gallery" color="inherit" underline="hover">
                  Gallery
                </Link>
              </Typography>
            </Grid>

            {/* Footer Links - Column 3 */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Link href="/contact" color="inherit" underline="hover">
                  Contact Us
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Link href="/promotions" color="inherit" underline="hover">
                  Promotions
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Link href="/services" color="inherit" underline="hover">
                  Services
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Link href="/register" color="inherit" underline="hover">
                  Register Business
                </Link>
              </Typography>
            </Grid>

            {/* Logo and Newsletter */}
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <img src="/logo.png" alt="City Support Logo" width="100" />
                <Typography variant="h6" color="#FF6B35" sx={{ mt: 1 }}>
                  CITY SUPPORT
                </Typography>
              </Box>
              <Box>
                <TextField
                  fullWidth
                  placeholder="Subscribe to our Newsletter"
                  variant="outlined"
                  size="small"
                  sx={{ 
                    mb: 1,
                    backgroundColor: 'white',
                    borderRadius: 1
                  }}
                />
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ 
                    backgroundColor: '#FF6B35',
                    '&:hover': {
                      backgroundColor: '#E95420',
                    }
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 3 }}>
            <IconButton color="inherit" sx={{ mx: 1, border: '1px solid white' }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ mx: 1, border: '1px solid white' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ mx: 1, border: '1px solid white' }}>
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ mx: 1, border: '1px solid white' }}>
              <YouTubeIcon />
            </IconButton>
          </Box>

          {/* Copyright */}
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Copyright © 2024 CitySupport
            </Typography>
            <Typography variant="body2" color="text.secondary">
              All Rights Reserved
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NearByPlacePage;