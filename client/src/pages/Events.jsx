import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs';
import EventComponet from '../components/EventComponet';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import event_1 from '../images/event_1.png';
import event_2 from '../images/event_2.png'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const eventFilters = [
  "Today",
  "Tomorrow",
  "This Weekend",
  "This Week",
  "Next Weekend",
  "Next Week",
  "This Month",
  "Custom Date",
];

const events = [
  { id: 1, name: 'Event 1', owner: "Divya Paramar", like: 70,img:event_1 },
  { id: 2, name: 'Event 2', owner: "Yuvraj Chavda",like: 80,img:event_1},
  { id: 3, name: 'Event 3', owner: "Krish Prajapati", like: 81,img:event_2},
  { id: 4, name: 'Event 4', owner: "Vaibhavi Patel", like: 90,img:event_2},
  { id: 5, name: 'Event 1', owner: "Divya Paramar", like: 70,img:event_1 },
  { id: 6, name: 'Event 2', owner: "Yuvraj Chavda",like: 80,img:event_1},
  { id: 7, name: 'Event 3', owner: "Krish Prajapati", like: 81,img:event_2},
  { id: 8, name: 'Event 4', owner: "Vaibhavi Patel", like: 90,img:event_2},
  { id: 9, name: 'Event 4', owner: "Vaibhavi Patel", like: 90,img:event_2},
];

const Events = () => {
  return (
    <div className="page-container">
      <Navbar />
      <GlobalBreadcrumbs />
      <div className="content">
      <Typography sx={{color:'rgb(46,122,197)',fontWeight:"bold",fontSize:"22px",pl:15,pb:3}}>Events</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%",pl:5,pr:5,pb:8}}>
        <Grid container spacing={3} sx={{ maxWidth: "1100px", justifyContent: "center" }}>
          {events.map((event) => (
            <Grid item key={event.id} xs={12} sm={6} md={4} lg={4} sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ width: "100%" }}>
                <EventComponet event={event} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

    <Box>
      <Typography sx={{ color: 'rgb(46,122,197)', fontWeight: "bold", fontSize: "22px", pl: 15, pb: 3 }}>
        Events Day Wise
      </Typography>

    <Box sx={{ flexGrow: 1, pl: 5, pr: 5, pb: 5 }}> {/* Added left & right padding */}
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
          {eventFilters.map((filter, index) => (
            <Grid item xs={2} sm={4} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Item sx={{ 
                width: "100%", 
                backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#e0e0e0", // Alternating background colors
                padding: "20px" // Adjust padding inside each block
              }}>
                {filter}
              </Item>
            </Grid>
          ))}
        </Grid>
    </Box>
  </Box>

      </div>
      <Footer />
    </div>
  );
};

export default Events;
