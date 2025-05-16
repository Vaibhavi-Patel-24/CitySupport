import React from "react";
import { useForm } from "react-hook-form";
import { Container, TextField, Button, Typography, Box, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalBreadcrumbs from "../components/GlobalBreadcrumbs";

const RegisterBusiness = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/RegisterBusiness/BusinessDetails", { state: data });
  };

  return (
    <div>
      <Navbar />
      <GlobalBreadcrumbs />
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", bgcolor: "#f5f5f5", py: 4 }}>
        <Paper elevation={3} sx={{ border: "2px solid #1976d2", width: { xs: "90%", sm: "650px" }, minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Box sx={{ bgcolor: "#1976d2", color: "white", p: 2 }}>
            <Typography variant="h5" fontWeight="bold">Register Your Business</Typography>
            <Typography variant="subtitle2" fontStyle="italic">Please provide all required details to register your business with us</Typography>
          </Box>

          <Box component="form" sx={{ p: 4 }} onSubmit={handleSubmit(onSubmit)}>
            <Typography sx={{ color: "#e67e22", fontWeight: "bold", mb: 0.5 }}>Business Owner*</Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField {...register("firstName")} required fullWidth variant="outlined" size="small" placeholder="First Name" />
              </Grid>
              <Grid item xs={6}>
                <TextField {...register("lastName")} required fullWidth variant="outlined" size="small" placeholder="Last Name" />
              </Grid>
            </Grid>

            <Typography sx={{ color: "#e67e22", fontWeight: "bold", mt: 2, mb: 0.5 }}>Business Name*</Typography>
            <TextField {...register("businessName")} required fullWidth variant="outlined" size="small" />

            <Typography sx={{ color: "#e67e22", fontWeight: "bold", mt: 2, mb: 0.5 }}>Contact Number*</Typography>
            <TextField {...register("contactNumber")} required fullWidth variant="outlined" size="small" />

            <Typography sx={{ color: "#e67e22", fontWeight: "bold", mt: 2, mb: 0.5 }}>E-mail*</Typography>
            <TextField {...register("email")} required fullWidth variant="outlined" size="small" />

            <Typography sx={{ color: "#e67e22", fontWeight: "bold", mt: 2, mb: 0.5 }}>Address*</Typography>
            <TextField {...register("address")} required fullWidth multiline rows={3} variant="outlined" size="small" />

            <Typography sx={{ color: "#e67e22", fontWeight: "bold", mt: 2, mb: 0.5 }}>GST No.*</Typography>
            <TextField {...register("gstNo")} required fullWidth variant="outlined" size="small" />

            <Typography sx={{ color: "#e67e22", fontWeight: "bold", mt: 2, mb: 0.5 }}>Aadhaar Number*</Typography>
            <TextField {...register("aadhaar")} required fullWidth variant="outlined" size="small" />

            <Box textAlign="center" mt={3}>
              <Button type="submit" variant="contained" color="primary" sx={{ px: 4, py: 1, textTransform: "none" }}>
                Next Page
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Footer />
    </div>
  );
};

export default RegisterBusiness;
