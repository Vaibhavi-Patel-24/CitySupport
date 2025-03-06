import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import logo from "../images/CITY SUPPORT main logo.png";

const Nav = styled(AppBar)({
  background: "white",
  color: "black",
  position: "relative",
  top: 0,
  width: "100%",
  zIndex: 1100,
});

const Image = styled("img")({
  height: 70,
  margin: "auto",
  padding: "5px 0 0",
});

const menuItems = [
  { text: "Home", to: "/" },
  { text: "Utility", to: "/utility" },
  { text: "Events", to: "/events" },
  { text: "Services", to: "/services" },
  { text: "Map", to: "/map" },
  { text: "Social", to: "/social" },
  { text: "Help", to: "/help" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <Nav>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box>
            <Link to="/">
              <Image src={logo} alt="logo" />
            </Link>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {menuItems.map((item, index) => (
              <MenuItem key={index} sx={{ fontSize: "14pt", color: "black" }}>
                <Link to={item.to} style={{ textDecoration: "none", color: "inherit" }}>
                  {item.text}
                </Link>
              </MenuItem>
            ))}
            <IconButton sx={{ color: "black", marginLeft: "20px" }}>
              <SearchIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton sx={{ color: "black", marginLeft: "10px" }}>
              <PersonOutlineOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={toggleDrawer(true)} sx={{ color: "black" }}>
              <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Nav>

      {/* Mobile Drawer - Sliding from Left for Better UX */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={toggleDrawer(false)}>
              <Link to={item.to} style={{ textDecoration: "none", color: "black" }}>
                <ListItemText primary={item.text} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
