import React, { useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import EventSettings from './EventSettings';
import NewsSettings from './NewsSettings';
import LogoImage from "../images/SwaLogoMain.png";
import AdminHome from "./AdminHome";
import UsersList from './UserList';
import AdminBlogs from './AdminBlogs';
import AdminCampaigns from './AdminCampaigns'; // Import the AdminCampaigns component

const drawerWidth = 240;
const Image = styled("img")({
  height: 45,
  margin: "auto",
  display: "flex",
  padding: "5px 0 0",
});
const Root = styled('div')(({ theme }) => ({
  display: 'flex',
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  justifyContent: 'flex-end',
}));

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: 0,
  },
  '& .MuiDrawer-paper': {
    width: drawerWidth,
  },
}));

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

const Content = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  overflowX: 'auto', 
}));

const AdminNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('Home');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (component) => {
    setSelectedComponent(component);
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Home':
        return <AdminHome />;
      case 'Blogs':
        return <AdminBlogs />;
      case 'Events':
        return <EventSettings />;
      case 'News':
        return <NewsSettings />;
      case 'Campaigns': // Add this case for rendering AdminCampaigns
        return <AdminCampaigns />;
      case 'Settings':
        return <h1>This is settings section..</h1>;
      default:
        return <h1>This will be the Dashboard</h1>;
    }
  };

  const drawer = (
    <div>
      <DrawerHeader>
        <div>
          <Image src={LogoImage} alt="Logo" sx={{ marginLeft: "auto" }} />
        </div>
        <IconButton onClick={handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem button onClick={() => handleNavigation('Home')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('Events')}>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('News')}>
          <ListItemIcon>
            <NewspaperIcon />
          </ListItemIcon>
          <ListItemText primary="News" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('Blogs')}> 
          <ListItemIcon>
            <NewspaperIcon />
          </ListItemIcon>
          <ListItemText primary="Blogs" />
        </ListItem>
        {/* <ListItem button onClick={() => handleNavigation('Campaigns')}> 
          <ListItemIcon>
            <EventIcon /> 
          </ListItemIcon>
          <ListItemText primary="Campaigns" />
        </ListItem> */}
        <ListItem button onClick={() => handleNavigation('Settings')}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Root>
      <CssBaseline />
      <AppBarStyled position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            SwaSarjan Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBarStyled>
      <DrawerStyled
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        {drawer}
      </DrawerStyled>
      <DrawerStyled
        variant="permanent"
        sx={{ display: { xs: 'none', sm: 'block' } }}
        open
      >
        {drawer}
      </DrawerStyled>
      <Content>
        <DrawerHeader />
        <Box>
          {renderComponent()}
        </Box>
      </Content>
    </Root>
  );
};

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <AdminNavbar />
  </ThemeProvider>
);

export default App;
