import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs';
import Blogs from '../components/Blogs';
import { Typography, Grid, Box, CircularProgress } from '@mui/material';
import { API } from '../services/api'; // 👈 Ensure this is correctly imported

const Social = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await API.getBlog();
      setBlogs(response.data?.data || []);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <Navbar />
      <GlobalBreadcrumbs />
      <div className="content">
        <Typography
          sx={{
            color: 'rgb(241,118,53)',
            fontWeight: "bold",
            fontSize: "22px",
            pl: { xs: 0, sm: 15 },
            pb: 3,
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          Checkout Our Blogs
        </Typography>

        <Box
          sx={{
            pl: { xs: 6, md: 12 },
            pr: { xs: 6, md: 12 },
            pb: { xs: 1, md: 7 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {loading ? (
            <CircularProgress />
          ) : (
            <Box>
              <Grid container spacing={3} sx={{ maxWidth: "1100px", justifyContent: "center" }}>
                {blogs.map((blog) => (
                  <Grid
                    item
                    key={blog._id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <Blogs blog={blog} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default Social;
