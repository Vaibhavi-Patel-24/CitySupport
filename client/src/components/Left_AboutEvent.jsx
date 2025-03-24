import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import event_2 from '../images/event_2.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import CampaignIcon from '@mui/icons-material/Campaign';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Left_AboutEvent = () => {
  return (
    <>
      <Box sx={{width:{xs:"100%",md:'60%'}, bgcolor:"rgb(255, 255, 255)",borderRadius:'20px' }}>

      
      <Box sx={{pt:4}}>

        <img src={event_2} 
          style={{ 
            width: '90%',  
            height: 'auto', 
            display: 'block', 
            margin:'auto auto',
            borderRadius:'10px'
          }} 
        />

        </Box>


        <Box sx={{pt:3,pb:3,pl:2.5,pr:2.5}}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', pb: 1}}>About Event</Typography>
        <Typography sx={{ pb: 2 }}>
          The Ahmedabad Food Festival 2025 is a celebration of the city's rich culinary heritage. 
          This festival brings together the best street food vendors, restaurants, and chefs 
          to offer an unforgettable experience for food lovers. From traditional Gujarati delicacies 
          like Dhokla, Fafda, and Thepla to global cuisines, this festival has something for everyone. 
          Enjoy live music, cooking competitions, and interactive workshops led by expert chefs.
        </Typography>

        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', pb: 1}}>Event Details</Typography>
        <Typography>
         <LocationOnIcon sx={{color:'rgb(240, 211, 17)',fontSize:17}}/> <b>Place:</b> Sabarmati Riverfront, Ahmedabad  
        </Typography>
        <Typography>
          <InsertInvitationIcon sx={{color:'rgb(53, 144, 241)',fontSize:17}}/> <b>Date:</b> April 10-12, 2025  
        </Typography>
        <Typography>
          <HeadsetMicIcon sx={{color:'rgb(54, 18, 199)',fontSize:17}}/> <b>Organized By:</b> Gujarat Tourism Board  
        </Typography>

        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', pb: 1,pt:2}}>Tickets</Typography>
        <Typography>
          <CampaignIcon sx={{color:'red',fontSize:17}}/> <b>Price:</b> ₹300 per person  
        </Typography>
        <Typography>
          <CurrencyRupeeIcon sx={{color:'green',fontSize:17}}/><b>Special Offer:</b> Group of 5 or more - ₹250 per person  
        </Typography>
      </Box>
      
      <Box sx={{pl:2.5,pb:3}}>
        <Button sx={{bgcolor:"rgb(46, 122, 197)",color:'white',fontSize:12}}>Get Tickets</Button>
      </Box>

      </Box>
    </>
  )
}

export default Left_AboutEvent
