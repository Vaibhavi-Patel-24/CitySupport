import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs';
import Footer from '../components/Footer';
import Grid from '@mui/material/Grid';
import { Box, Typography, CircularProgress } from '@mui/material';
import { API } from '../services/api';
import HospitalCard from '../components/HospitalCard';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {
    try {
      const response = await API.getHospitals();
      const backendHospitals = response.data?.data || [];

      const formatted = backendHospitals.map(hospital => ({
        id: hospital._id,
        name: hospital.name,
        location: hospital.location,
        mobile: hospital.mobile,
        email: hospital.email,
      }));

      setHospitals(formatted);
    } catch (error) {
      console.error("Error fetching hospitals:", error);
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
          Hospitals in City
        </Typography>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography color="error" variant="h6">
              Error loading Hospitals
            </Typography>
          </Box>
        ) : hospitals.length === 0 ? (
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h6" color="textSecondary">
              No hospital added
            </Typography>
          </Box>
        ) : (
          <Box sx={{ px: { xs: 2, sm: 4, md: 10 }, pb: 7 }}>
            <Grid container spacing={3} justifyContent="center">
              {hospitals.map((hospital) => (
                <Grid item key={hospital.id} xs={12} sm={6} md={4} lg={3}>
                  <Box sx={{ height: '100%' }}>
                    <HospitalCard hospital={hospital} />
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

export default Hospitals;
