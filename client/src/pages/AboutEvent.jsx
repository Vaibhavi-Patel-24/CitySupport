import React from 'react'
import Left_AboutEvent from '../components/Left_AboutEvent'
import Right_AboutEvent from '../components/Right_AboutEvent'
import { Box } from '@mui/material'
import GlobalBreadcrumbs from "../components/GlobalBreadcrumbs";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const AboutEvent = () => {
  return (
    <>
    <Navbar/>
    <GlobalBreadcrumbs/>
    <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'},pt:5,pl:2,pr:2,pb:5,gap:1}}>
      <Left_AboutEvent />
      <Right_AboutEvent />
    </Box>
    <Footer/>
    </>
  )
}

export default AboutEvent
