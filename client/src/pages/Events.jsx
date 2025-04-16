import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs';
import EventComponet from '../components/EventComponet';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import event_1 from '../images/event_1.png';
import event_2 from '../images/event_2.png'
import SearchEvents from '../components/SearchEvents';
import Days_Events from './Days_Events';


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

      <SearchEvents/>


      <Typography sx={{color:'rgb(241,118,53)',fontWeight:"bold",fontSize:"22px",pl: { xs: 0, sm: 15 },pb:3,  textAlign: { xs: 'center', sm: 'left' } }}>Events</Typography>


        <Box sx={{pl:{xs:6,md:14},pr:{xs:6,md:14},pb:{xs:1,md:7},display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Box>
        <Grid container spacing={3} sx={{ maxWidth: "1100px", justifyContent: "center",alignItems: "center" }}>
          {events.map((event) => (
            <Grid item key={event.id} xs={12} sm={6} md={4} lg={4} sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ width: "100%",maxWidth: 350 }}>
                <EventComponet event={event} />
              </Box>
            </Grid>
          ))}
        </Grid>
        </Box>
        </Box>
     


      <Days_Events/>

      </div>
      <Footer />
    </div>
  );
};

export default Events;
