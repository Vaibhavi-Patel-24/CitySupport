import React from "react";
import { Box, Toolbar, styled, AppBar,Typography, Button} from "@mui/material"
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
                <Toolbar sx={{ display: "flex", justifyContent:{sx:'' , md:'space-between'} }}>
                    <Box
                    //  sx={{ flex: "1", display: "flex", justifyContent: "space-between" }}
                     >
                        <Image src={logo} alt="logo" sx={{ marginLeft: "auto" }}/>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'space-evenly' }}>
                        {pages.map((page) => (
                        <Typography
                            key={page}
                            // onClick={handleCloseNavMenu}
                            sx={{ my: 1,  color: 'black',display:'block' }}
                        >
                            {page}
                        </Typography>
                        ))}
                    </Box>

                    
                        <Box sx={{ alignSelf:'center',justifySelf:'right'}}>
                        <SearchIcon/>
                        </Box>
                        <Box>
                        <PersonOutlineOutlinedIcon/>
                        </Box> 

                </Toolbar>
            </Nav>
        </Box>
    )
}