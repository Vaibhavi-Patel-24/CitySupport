import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs';
import Footer from '../components/Footer';
import Grid from '@mui/material/Grid';
import { Box, Typography, CircularProgress } from '@mui/material';
import { API } from '../services/api';
import ElectricityCard from '../components/ElectricityCard.jsx'; // You must create this

const Electricity = () => {
  const [electricitys, setElctricitys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchElectricitys();
  }, []);

  const fetchElectricitys = async () => {
    try {
      const response = await API.getElectricity(); // You must define this in your API service
      const backendElectricitys = response.data?.data || [];

      const formatted = backendElectricitys.map(electricity => ({
        id: electricity._id,
        name: electricity.name,
        location: electricity.location,
        contact: electricity.contact,
        email: electricity.email,
      }));

      setElctricitys(formatted);
    } catch (error) {
      console.error("Error fetching electricitys:", error);
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
          electricity Services
        </Typography>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography color="error" variant="h6">
              Error loading electricity Services
            </Typography>
          </Box>
        ) : electricitys.length === 0 ? (
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h6" color="textSecondary">
              No electricity service added
            </Typography>
          </Box>
        ) : (
          <Box sx={{ px: { xs: 2, sm: 4, md: 10 }, pb: 7 }}>
            <Grid container spacing={3} justifyContent="center">
              {electricitys.map((electricity) => (
                <Grid item key={electricity.id} xs={12} sm={6} md={4} lg={3}>
                  <Box sx={{ height: '100%' }}>
                    <ElectricityCard  electricity={electricity} />
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

export default Electricity;
