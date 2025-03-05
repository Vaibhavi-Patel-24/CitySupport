import React from 'react';
import { Container, TextField, Button, Typography, Box, Grid, Paper } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs';

const RegisterBusiness = () => {
  return (
    <div>
      <Navbar />
      <GlobalBreadcrumbs />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ width: '800px', border: '2px solid #1976d2' }}>
          {/* Header */}
          <Box sx={{ bgcolor: '#1976d2', color: 'white', p: 2 }}>
            <Typography variant="h5" fontWeight="bold">Register Your Business</Typography>
            <Typography variant="subtitle1" fontStyle="italic">Please provide all required details to register your business with us</Typography>
          </Box>

          {/* Form */}
          <Box component="form" sx={{ p: 3 }}>
            {/* Business Owner */}
            <Typography sx={{ color: '#e67e22', fontWeight: 'bold', mb: 0.5 }}>Business Owner*</Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}><TextField fullWidth size="small" variant="outlined" placeholder="First Name" /></Grid>
              <Grid item xs={6}><TextField fullWidth size="small" variant="outlined" placeholder="Last Name" /></Grid>
            </Grid>

            {/* Business Name */}
            <Typography sx={{ color: '#e67e22', fontWeight: 'bold', mt: 1, mb: 0.5 }}>Business Name*</Typography>
            <TextField fullWidth size="small" variant="outlined" />

            {/* Contact Number */}
            <Typography sx={{ color: '#e67e22', fontWeight: 'bold', mt: 1, mb: 0.5 }}>Contact Number*</Typography>
            <TextField fullWidth size="small" variant="outlined" />

            {/* Email */}
            <Typography sx={{ color: '#e67e22', fontWeight: 'bold', mt: 1, mb: 0.5 }}>E-mail*</Typography>
            <TextField fullWidth size="small" variant="outlined" />

            {/* Address */}
            <Typography sx={{ color: '#e67e22', fontWeight: 'bold', mt: 1, mb: 0.5 }}>Address*</Typography>
            <TextField fullWidth multiline rows={3} variant="outlined" />
            <Grid container spacing={1} sx={{ mt: 1 }}>
              <Grid item xs={6}><TextField fullWidth size="small" variant="outlined" placeholder="Street Address" /></Grid>
              <Grid item xs={6}><TextField fullWidth size="small" variant="outlined" placeholder="State / Province" /></Grid>
            </Grid>
            <Grid container spacing={1} sx={{ mt: 1 }}>
              <Grid item xs={6}><TextField fullWidth size="small" variant="outlined" placeholder="City" /></Grid>
              <Grid item xs={6}><TextField fullWidth size="small" variant="outlined" placeholder="Postal / Zip Code" /></Grid>
            </Grid>

            {/* GST & Aadhaar */}
            <Typography sx={{ color: '#e67e22', fontWeight: 'bold', mt: 1, mb: 0.5 }}>GST No.*</Typography>
            <TextField fullWidth size="small" variant="outlined" />
            <Typography sx={{ color: '#e67e22', fontWeight: 'bold', mt: 1, mb: 0.5 }}>Aadhaar Number*</Typography>
            <TextField fullWidth size="small" variant="outlined" />

            {/* Submit Button */}
            <Box textAlign="center" mt={2} mb={2}>
              <Button variant="contained" color="primary" sx={{ px: 4, py: 1, textTransform: 'none' }}>Next Page</Button>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Footer />
    </div>
  );
};

export default RegisterBusiness;
