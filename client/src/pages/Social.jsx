import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs'
import Blogs from '../components/Blogs'
import profile from "../images/profile.png";
import blog_1 from "../images/blog_1.png";
import { Grid2, Typography } from '@mui/material'
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
            <Typography sx={{color:'rgb(46,122,197)',fontWeight:"bold",fontSize:"22px",pl:15,pb:3}}>Checkout Our Blogs</Typography>
            <Grid2 container spacing={3} justifyContent="center">
              {blogs.map((blog ) => (
                <Grid2 item key={blog.id} xs={12} sm={6} md={4} lg={3}>
                  <Blogs blog={blog}/>
                </Grid2>
              ))}
            </Grid2>
            </div>
        <Footer/>
    </div>
  )
}

export default Social
