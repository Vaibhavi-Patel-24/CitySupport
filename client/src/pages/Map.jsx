import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DistrictGlance from '../components/DistrictGlance';
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs';
import MapComponent from '../components/MainMap';

function Map() {
  return (
    <Box className="page-container" display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <GlobalBreadcrumbs />
      <Box 
        className="content" 
        flexGrow={1} 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        gap={2} 
        px={2} // horizontal padding
        py={4} // vertical padding
        
      >
        <Typography variant="h6">Ahmedabad📍</Typography>
        
        {/* Wrap MapComponent in a Box with width control */}
        <Box 
          width={{ xs: '100%', sm: '90%', md: '80%', lg: '60%', xl: '50%' }}
          maxHeight="500px"           // max height so map doesn't get too tall
          bgcolor="black"
          border="2px solid #ACADAE"
          borderRadius="30px"
          p={2}
          overflow="hidden"           // hide anything overflowing container
          sx={{
            boxShadow: '0 10px 30px rgba(0,0,0,0.7), 0 0 15px rgba(255, 2, 2, 0.2)',
            '& .map-container': {    // target your GoogleMap container (adjust class if needed)
              width: '100% !important',
              height: '100% !important',
              borderRadius: '30px !important',

            }
          }}
        >
          <MapComponent lat={23.082308} lng={72.597699} />
        </Box>



        <DistrictGlance />
      </Box>
      <Footer />
    </Box>
  );
}

export default Map;
