import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs'
import Blogs from '../components/Blogs'
import profile from "../images/profile.png";
import blog_1 from "../images/blog_1.png";
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const blogs = [
  {
    id: 1,
    title: "The Impact of CitySupport on the Workplace: How Technology is Changing",
    author: "krish prajapati",
    image: blog_1,
    profile: profile,
  },
  {
    id: 2,
    title: "The Impact of CitySupport on the Workplace: How Technology is Changing",
    author: "Abhay patel",
    image: blog_1,
    profile: profile,
  },
  {
    id: 3,
    title: "The Impact of CitySupport on the Workplace: How Technology is Changing",
    author: "Abhay patel",
    image: blog_1,
    profile: profile,
  },
  {
    id: 4,
    title: "The Impact of CitySupport on the Workplace: How Technology is Changing",
    author: "Abhay patel",
    image: blog_1,
    profile: profile,
  },
  {
    id: 5,
    title: "The Impact of CitySupport on the Workplace: How Technology is Changing",
    author: "Abhay patel",
    image: blog_1,
    profile: profile,
  },
  {
    id: 6,
    title: "The Impact of CitySupport on the Workplace: How Technology is Changing",
    author: "Abhay patel",
    image: blog_1,
    profile: profile,
  },
  {
    id: 7,
    title: "The Impact of CitySupport on the Workplace: How Technology is Changing",
    author: "Abhay patel",
    image: blog_1,
    profile: profile,
  },
  {
    id: 8,
    title: "The Impact of CitySupport on the Workplace: How Technology is Changing",
    author: "Abhay patel",
    image: blog_1,
    profile: profile,
  },
  {
    id: 9,
    title: "The Impact of CitySupport on the Workplace: How Technology is Changing",
    author: "Abhay patel",
    image: blog_1,
    profile: profile,
  }
];

const Social = () => {
  return (
    <div className="page-container">
            <Navbar/>
            <GlobalBreadcrumbs/>
            <div className="content">


            <Typography sx={{color:'rgb(241,118,53)',fontWeight:"bold",fontSize:"22px",pl: { xs: 0, sm: 15 },pb:3,  textAlign: { xs: 'center', sm: 'left' } }}>Checkout Our Blogs</Typography>
            
            <Box sx={{pl:{xs:6,md:12},pr:{xs:6,md:12},pb:{xs:1,md:7},display:'flex',alignItems:'center',justifyContent:'center'}}>

            <Box>
            <Grid container spacing={3} sx={{ maxWidth: "1100px", justifyContent: "center" }}>
              {blogs.map((blog ) => (
                <Grid item key={blog.id} xs={12} sm={6} md={4} lg={4} sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ width: "100%" }}>
                  <Blogs blog={blog}/>
                </Box>
                </Grid>
              ))}
            </Grid>
            </Box>
            
            </Box>

            </div>
        <Footer/>
    </div>
  )
}



export default Social
