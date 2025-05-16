import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs';
import Footer from '../components/Footer';
import Grid from '@mui/material/Grid';
import { Box, Typography, CircularProgress } from '@mui/material';
import { API } from '../services/api';
import MunicipalCard from '../components/MunicipalCard'; // You must create this

const Municipal = () => {
  const [municipals, setMunicipals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchMunicipals();
  }, []);

  const fetchMunicipals = async () => {
    try {
      const response = await API.getMunicipals(); // You must define this in your API service
      const backendMunicipals = response.data?.data || [];

      const formatted = backendMunicipals.map(municipal => ({
        id: municipal._id,
        name: municipal.name,
        location: municipal.location,
        contact: municipal.contact,
        email: municipal.email,
      }));

      setMunicipals(formatted);
    } catch (error) {
      console.error("Error fetching municipals:", error);
      setError(true);
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
            pb: 3,
            pt: 3,
            textAlign: 'center',
          }}
        >
          Municipal Services
        </Typography>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography color="error" variant="h6">
              Error loading Municipal Services
            </Typography>
          </Box>
        ) : municipals.length === 0 ? (
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h6" color="textSecondary">
              No municipal service added
            </Typography>
          </Box>
        ) : (
          <Box sx={{ px: { xs: 2, sm: 4, md: 10 }, pb: 7 }}>
            <Grid container spacing={3} justifyContent="center">
              {municipals.map((municipal) => (
                <Grid item key={municipal.id} xs={12} sm={6} md={4} lg={3}>
                  <Box sx={{ height: '100%' }}>
                    <MunicipalCard municipal={municipal} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Municipal;
