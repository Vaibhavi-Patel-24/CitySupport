import React from 'react';
import { Card, CardContent, Typography, Grid, Box, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const events = [
  { date: '5', month: 'MAR', category: 'EDUCATION', description: 'Encouraged children to study and helped needed children' },
  { date: '12', month: 'APR', category: 'HEALTH', description: 'Free health checkup camp for locals' },
  { date: '20', month: 'MAY', category: 'COMMUNITY', description: 'Neighborhood clean-up drive and awareness' },
  { date: '8', month: 'JUN', category: 'EDUCATION', description: 'Scholarship announcements and application help' }
];

const EventsSection = () => {
  return (
    <Box sx={{ padding: '40px 20px', marginX: { xs: 2, md: '120px' } }}>
      <Typography 
        variant="h4" 
        sx={{ 
          color: '#ff5722',
          fontSize: '2rem',
          fontWeight: 500,
          marginBottom: '24px',
          '&:after': {
            content: '""',
            display: 'block',
            width: '100%',
            height: '1px',
            backgroundColor: '#e0e0e0',
            marginTop: '8px'
          }
        }}
      >
        Events
      </Typography>

      <Grid container spacing={3}>
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card 
              sx={{ 
                backgroundColor: '#4b90dd',
                color: 'black',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: { xs: '140px', sm: '140px' }, // compact uniform height
                paddingX: 2,
                boxShadow: 'none'
              }}
            >
              <Box sx={{ 
                textAlign: 'left',
                minWidth: '45px',
                marginRight: '16px'
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 500,
                    fontSize: '2rem',
                    lineHeight: '1'
                  }}
                >
                  {event.date}
                </Typography>
                <Typography sx={{ fontSize: '0.875rem', marginTop: '4px' }}>
                  {event.month}
                </Typography>
              </Box>

              <CardContent 
                sx={{ 
                  flexGrow: 1,
                  padding: 0,
                  marginRight: '16px',
                  overflow: 'hidden'
                }}
              >
                <Typography 
                  sx={{ 
                    fontSize: '0.75rem',
                    letterSpacing: '0.5px',
                    marginBottom: '6px'
                  }}
                >
                  {event.category}
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: '0.9rem',
                    lineHeight: '1.3',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {event.description}
                </Typography>
              </CardContent>

              <IconButton 
                sx={{ 
                  backgroundColor: 'white',
                  color: '#4b90dd',
                  width: '32px',
                  height: '32px',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)'
                  },
                  '& .MuiSvgIcon-root': {
                    fontSize: '20px'
                  }
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventsSection;
