import React from "react";
import { Box, Toolbar, styled, AppBar,Typography, Button, IconButton} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import logo from "../images/CITY SUPPORT main logo.png"
// import Person from "../images/member.png"
// import Search from "../images/search icon.png"



const Nav = styled(AppBar)({ background: "white",color: "black", position: "static" });
const NavMenu = styled("div")({ 
    color:"black",
    display:"flex",
    justifyContent:"space-between",
     })
const Image = styled("img")({
    height: 70,
    margin: "auto",
    display: "flex",
    padding: "5px 0 0",
    
  });

  const pages = ['Home' , 'Utility', 'Events', 'Services', 'Map', 'Social', 'Help' ]

export default function Navbar() {
    return(
        <Box sx={{flexGrow:1}}>
            <Nav>
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                    
                    <IconButton
                    //  sx={{ flexGrow:1,display:'flex', justifySelf:'flex-start' }}
                     >
                        <Image src={logo} alt="logo" sx={{ marginLeft: "auto" }}/>
                    </IconButton>

                    
                    <Box sx={{ display: { xs:'none' , md:'flex'}, justifyContent:'space-evenly'}}>
                           
                        <Box sx={{ display: { xs: "none", md: "flex" },justifyContent: "space-evenly",flex: "2", }}>
                                
                                {pages.map((page) => (
                                <Typography
                                    key={page}
                                    // onClick={handleCloseNavMenu}
                                    sx={{ my: 1,fontSize:'14pt',  color: 'black',display:'block', padding:'0 15px' }}
                                >
                                    {page}
                                </Typography>
                                ))}
                        </Box>
                    
                        <IconButton edge='start' sx={{color:"black",padding:'0 10px 0 30px'}} aria-label="logo">
                            <SearchIcon sx={{fontSize:35}}/>
                        </IconButton>

                        <IconButton edge='start' sx={{color:'black',padding:'0 16px 0 20px'}} aria-label="logo">
                            <PersonOutlineOutlinedIcon sx={{fontSize:35}}/>
                        </IconButton> 

                    </Box>
                </Toolbar>
            </Nav>
        </Box>
    )
}