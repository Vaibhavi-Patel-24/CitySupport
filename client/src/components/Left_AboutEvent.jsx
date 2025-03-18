import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import event_2 from '../images/event_2.png'

const Left_AboutEvent = () => {
  return (
    <>
      <Box sx={{width:{xs:"100%",md:'60%'}, bgcolor:"rgb(217,217,217)" }}>
        <img src={event_2}/>
        <Typography>About Event</Typography>
        <Typography>Event Details</Typography>
        <Typography>Tickets</Typography>
        <Button sx={{bgcolor:"rgb(46, 122, 197)",color:'white'}}>Get Tickets</Button>
      </Box>
    </>
  )
}

export default Left_AboutEvent
