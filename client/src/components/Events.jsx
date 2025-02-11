import React from 'react';
import { Card, CardContent, Typography, Grid, Box, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const events = [
  { date: '5', month: 'Mar', category: 'Education', description: 'Encouraged children to study and helped needed children' },
  { date: '6', month: 'Apr', category: 'Health', description: 'Organized a free health camp for the community' },
  { date: '15', month: 'May', category: 'Environment', description: 'Conducted a tree-planting drive in the neighborhood' },
  { date: '20', month: 'Jun', category: 'Community', description: 'Hosted a cultural festival to promote local talent' }
];

const EventsSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: 4 }}>
      <Typography variant="h4" sx={{ color: '#f97316', borderBottom: '2px solid #f97316', display: 'inline-block', mb: 3 }}>
        Events
      </Typography>
      <Grid container spacing={3}>
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ backgroundColor: '#1e40af', color: 'white', borderRadius: 2, display: 'flex', alignItems: 'center', padding: 2 }}>
              <Box sx={{ textAlign: 'center', mr: 2 }}>
                <Typography variant="h5" fontWeight="bold">{event.date}</Typography>
                <Typography sx={{ textTransform: 'uppercase' }}>{event.month}</Typography>
              </Box>
              <CardContent sx={{ flexGrow: 1, padding: '0 !important' }}>
                <Typography variant="caption" sx={{ letterSpacing: 1, textTransform: 'uppercase', opacity: 0.8 }}>
                  {event.category}
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  {event.description}
                </Typography>
              </CardContent>
              <IconButton sx={{ backgroundColor: 'white', color: '#1e40af', borderRadius: '50%' }}>
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
