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
import ArticleIcon from '@mui/icons-material/Article';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import TourIcon from '@mui/icons-material/Tour';
import { responsiveFontSizes, styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';

// import EventSettings from './EventSettings';
// import NewsSettings from './NewsSettings';
import LogoImage from "../../images/CITY SUPPORT main logo.png";
// import AdminHome from "./AdminHome";
// import UsersList from './UserList';
// import AdminBlogs from './AdminBlogs';
// import AdminCampaigns from './AdminCampaigns'; // Import the AdminCampaigns component
import ContactQueries from './Queries';
import ManageFAQs from './AdminFAQs';
import Subscribers from './Subscribers';
import MustVisit from './MustVisit';

const drawerWidth = 240;
const Image = styled("img")({
  height: 100,
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
  padding: theme.spacing(0, 4),
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

const AdminMain = () => {
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
        return <h1>This is Home section..</h1>;
      case 'Blogs':
        return <h1>This is Blog section..</h1>;
      case 'Events':
        return <h1>This is Events section..</h1>;
      case 'News':
        return <h1>This is  news section..</h1>;
      case 'Campaigns': // Add this case for rendering AdminCampaigns
        return <h1>This is campaign section..</h1>;
      case 'Queries': // Add this case for rendering AdminCampaigns
        return <ContactQueries/>;
      case 'FAQs': // Add this case for rendering AdminCampaigns
        return <ManageFAQs/>;
      case 'MustVisit': // Add this case for rendering AdminCampaigns
        return <MustVisit/>;
      case 'Settings':
        return <h1>This is settings section..</h1>;
      case 'Subscribers':
        return <Subscribers/>;
      default:
        return <h1>This will be the Dashboard</h1>;
    }
  };

  const drawer = (
    <div>
      <DrawerHeader>
        <div >
          {/* <Image src={LogoImage} alt="Logo" sx={{ marginLeft: "auto" }} /> */}
          <Typography variant='h4' sx={{color:'#fc843d', fontWeight:900 , fontStyle:'normal',alignSelf:'center', cursor:'pointer'}} noWrap>CitySupport</Typography>
        </div>
        <IconButton onClick={handleDrawerToggle} sx={{ display: { md: 'none',lg:'none' }}}>
          <ChevronLeftIcon  />
        </IconButton>
      </DrawerHeader>

      <Divider />

      <List>

        <ListItem button onClick={() => handleNavigation('Home')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" sx={{cursor:'pointer'}} />
        </ListItem>
       
        <ListItem button onClick={() => handleNavigation('Events')}>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Events" sx={{cursor:'pointer'}}/>
        </ListItem>
       
        <ListItem button onClick={() => handleNavigation('News')}>
          <ListItemIcon>
            <NewspaperIcon />
          </ListItemIcon>
          <ListItemText primary="News" sx={{cursor:'pointer'}}/>
        </ListItem>
        
        <ListItem button onClick={() => handleNavigation('Blogs')}> 
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="Blogs" sx={{cursor:'pointer'}}/>
        </ListItem>

        <ListItem button onClick={() => handleNavigation('Subscribers')}> 
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Subscribers" sx={{cursor:'pointer'}}/>
        </ListItem>


        <ListItem button onClick={() => handleNavigation('Queries')}> 
          <ListItemIcon>
            <LiveHelpIcon />
          </ListItemIcon>
          <ListItemText primary="Queries"sx={{cursor:'pointer'}} />
        </ListItem>
        {/* <ListItem button onClick={() => handleNavigation('Campaigns')}> 
          <ListItemIcon>
            <EventIcon /> 
          </ListItemIcon>
          <ListItemText primary="Campaigns" />
        </ListItem> */}
       
        <ListItem button onClick={() => handleNavigation('FAQs')}>
          <ListItemIcon>
            <PsychologyAltIcon />
          </ListItemIcon>
          <ListItemText primary="FAQs" sx={{cursor:'pointer'}} />
        </ListItem>
        
        <ListItem button onClick={() => handleNavigation('MustVisit')}>
          <ListItemIcon>
            <TourIcon />
          </ListItemIcon>
          <ListItemText primary="MustVisit" sx={{cursor:'pointer'}} />
        </ListItem>

        <ListItem button onClick={() => handleNavigation('Settings')}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" sx={{cursor:'pointer'}} />
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
            Admin Dashboard
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

let theme = createTheme();
theme = responsiveFontSizes(theme);
const App = () => (
  <ThemeProvider theme={theme}>
    <AdminMain />
  </ThemeProvider>
);

export default App;
