import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import areaIcon from '../images/area-icon.png';
import populationIcon from '../images/population-icon.png';
import literacyIcon from '../images/literacy-icon.png';
import villagesIcon from '../images/villages-icon.png';
import blockIcon from '../images/block-icon.png';
import policeIcon from '../images/police-icon.png';
import nagarIcon from '../images/nagar-icon.png';
import languageIcon from '../images/language-icon.png';

const DistrictGlance = () => {
  const stats = [
    {
      icon: areaIcon,
      label: 'Area',
      value: '4500 sq. km'
    },
    {
      icon: populationIcon,
      label: 'Poppulation',
      value: '23,60,000'
    },
    {
      icon: literacyIcon,
      label: 'Literacy Rate',
      value: '83.61%'
    },
    {
      icon: villagesIcon,
      label: 'Villages',
      value: '597'
    },
    {
      icon: blockIcon,
      label: 'Block',
      value: '9'
    },
    {
      icon: policeIcon,
      label: 'Police station',
      value: '21'
    },
    {
      icon: nagarIcon,
      label: 'Nagar Palika',
      value: '6'
    },
    {
      icon: languageIcon,
      label: 'Languages',
      value: '3'
    }
  ];

  return (
    <Box sx={{ 
      bgcolor: 'black', 
      color: 'white',
      width: '93%',
      margin: 7,
      padding: 0,
      borderRadius: '16px',
      mx: 'auto',
      flexDirection: { xs: 'column', sm: 'row' }, // column for small screens
      textAlign: { xs: 'center', sm: 'left' },
      justifyContent: { xs: 'center', sm: 'flex-start' }

    }}>
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Typography variant="h6" sx={{ mb: 4, pl: 1, color: 'white' }}>
          ~DISTRICT AT GLANCE
        </Typography>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)'
          },
          gap: 2,
          px: 2,
        }}>
          {stats.map((item, index) => (
            <Box key={index} sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                width: '24px',
                height: '24px',
                minWidth: '24px',
              }}>
                <img 
                  src={item.icon} 
                  alt={item.label} 
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </Box>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
              }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#ffffff',
                    fontWeight: 500
                  }}
                >
                  {item.label}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'white',
                    ml: 2 
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default DistrictGlance;