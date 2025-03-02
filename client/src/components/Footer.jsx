import React from 'react'
import { Link } from 'react-router-dom';
import { Box, TextField, Button, IconButton, Typography} from '@mui/material'
import logo from "../images/CITY_SUPPORT_logo.png"
import { useState } from 'react'
import linkedin from "../images/linkedin.png"
import facebook from "../images/Facebook.png"
import insta from "../images/Instagram.png"
import youtube from "../images/Youtube.png"


const Footer = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
    <Box sx={{bgcolor:"black",pt:{md:2},pl:{md:17},pr:{md:17},height:'auto',bottom:0,marginTop:1}}>

      <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'}}}>
        <Box sx={{pt:3,display:'flex',flexDirection:{xs:'column',md:'row'},alignItems: { xs: 'center', md: 'flex-start' },textAlign: { xs: "center", md: "left" },flexGrow:1,gap:{xs:5,md:10},marginBottom:{xs:4},    justifyContent: { xs: "center", md: "flex-start"}}}>
            
            <ul style={{display: "flex",flexDirection:"column",listStyleType: "none",margin:0,padding:0}}>
                <Link to={'/'} style={{color:"rgb(46, 122, 197)",marginBottom:25,textDecoration:'none'}}>Home</Link>
                <Link to={'/Utility'} style={{color:"white",textDecoration:'none',marginBottom:8}}>Utility</Link>
                <Link to={'/Events'} style={{color:"white",textDecoration:'none',marginBottom:8}}>Events</Link>
                <Link to={'/Social'} style={{color:"white",textDecoration:'none'}}>Social</Link>
            </ul>

            <ul style={{display: "flex",flexDirection:"column",listStyleType: "none",margin:0,padding:0}}>
                <Link to={'/Tourism'} style={{color:"rgb(46, 122, 197)",marginBottom:25,textDecoration:'none'}}>Tourism</Link>
                <Link to={'/Transports'} style={{color:"white",textDecoration:'none',marginBottom:8}}>Transports</Link>
                <Link to={'/LocalBusiness'} style={{color:"white",textDecoration:'none',marginBottom:8}}>Local Business</Link>
                <Link to={'/Gallery'} style={{color:"white",textDecoration:'none'}}>Gallery</Link>
            </ul>

            <ul style={{display: "flex",flexDirection:"column",listStyleType: "none",margin:0,padding:0}}>
                <Link to={'/ContactUs'} style={{color:"rgb(46, 122, 197)",marginBottom:25,textDecoration:'none'}}>Contact Us</Link>
                <Link to={'/Promotions'} style={{color:"white",textDecoration:'none',marginBottom:8}}>Promotions</Link>
                <Link to={'/Services'} style={{color:"white",textDecoration:'none',marginBottom:8}}>Services</Link>
                <Link to={'/RegisterBusiness'} style={{color:"white",textDecoration:'none'}}>Register Business</Link>
            </ul>            
        </Box>

        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: 1,justifyContent: "center",marginBottom:{xs:4}}}>
              <img src={logo} alt="logo" style={{width:'auto',height:120}}/>
                <TextField
                variant="outlined"
                placeholder="Subscribe to our Newsletter" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                sx={{backgroundColor:"white",borderRadius:'8px', width: "235px"}}
                size='small'
              />
              <Button variant="contained" size="small" sx={{ backgroundColor: "rgb(241,118,53)", color: "rgb(73,143,191)",fontWeight: "bold",fontSize:"14px",borderRadius:"10px"}}>SUBSCRIBE</Button>
        </Box>
      </Box>

        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'white'}}>
          <IconButton sx={{gap:{xs:1,md:3}}}>
              <img src={linkedin} alt='linkedin' style={{ width: 44, height: 44 }}/>
              <img src={facebook} alt='facebook' style={{ width: 44, height: 44 }}/>
              <img src={insta} alt='instagram' style={{ width: 44, height: 44 }}/>
              <img src={youtube} alt='youtube'style={{ width: 44, height: 44 }}/>
          </IconButton>

          <Typography sx={{marginTop:1,color:'rgba(240, 240, 240, 0.64)'}}>Copyright © 2025 CitySupport</Typography>
          <Typography sx={{color:"rgba(240, 240, 240, 0.64)"}}>All Rights Reserved</Typography>
        </Box>
    </Box>
      
    </>
  )
}

export default Footer
