import React, { useState } from "react";
import { Box, Toolbar, styled, AppBar,Typography, Button, IconButton, MenuItem} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import logo from "../images/CITY SUPPORT main logo.png"
import { Link } from "react-router-dom";

const Nav = styled(AppBar)({ 
    background: "white", 
    color: "black", 
    position: "relative",
    top: 0, 
    width: "100%",
    zIndex: 1100 
});
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
    const [activeMenu, setActiveMenu] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
      };
    const menuItems = [
        { text: "Home", to: "/", onClick: () => setActiveMenu("Home") },
        { text: "Utility", to: "/utility", onClick: () => setActiveMenu("Utility") },
        { text: "Events", to: "/events", onClick: () => setActiveMenu("Events") },
        { text: "Services", to: "/services", onClick: () => setActiveMenu("Services") },
        { text: "Map", to: "/map", onClick: () => setActiveMenu("Map") },
        { text: "Social", to: "/social", onClick: () => setActiveMenu("Social") },
        { text: "Help", to: "/help", onClick: () => setActiveMenu("Help") },
      ]
    return(
        <>
        <Box sx={{flexGrow:1, position:"relative"}}>
            <Nav>
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                    
                    <Box
                    //  sx={{ flexGrow:1,display:'flex', justifySelf:'flex-start' }}
                     >
                        <Link to="/">
                        <Image src={logo} alt="logo" sx={{ marginLeft: "auto" }}/>
                        </Link>
                    </Box>

                    
                    <Box sx={{ display: { xs:'none' , md:'flex'}, justifyContent:'space-evenly'}}>
                           
                        <Box sx={{ display: { xs: "none", md: "flex" },justifyContent: "space-evenly",flex: "2", }}>
                                
                                {menuItems.map((item,index) => (
                                <MenuItem
                                    key={index}
                                    
                                    sx={{ my: 1,fontSize:'14pt',  color: 'black',display:'block', padding:'0 15px' }}
                                >
                                    <Link
                                        to={item.to}
                                        style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                        {item.text}
                                    </Link>
                                </MenuItem>
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
        </>
    )
}