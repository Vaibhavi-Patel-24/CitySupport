import React from "react";
import { useForm } from "react-hook-form";
import { Container, TextField, Button, Typography, Box, Grid, Paper, MenuItem } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalBreadcrumbs from "../components/GlobalBreadcrumbs";

const BusinessDetails = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <Navbar />
      <GlobalBreadcrumbs />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          bgcolor: "#f5f5f5",
          py: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            border: "2px solid #1976d2",
            width: { xs: "90%", sm: "650px" },
            minHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ bgcolor: "#1976d2", color: "white", p: 2 }}>
            <Typography variant="h5" fontWeight="bold">
              Business Details
            </Typography>
            <Typography variant="subtitle2" fontStyle="italic">
              Please provide your business details
            </Typography>
          </Box>

          <Box component="form" sx={{ p: 4 }} onSubmit={handleSubmit(onSubmit)}>
            <Typography sx={{ color: "#e67e22", fontWeight: "bold", mb: 0.5 }}>Business Category*</Typography>
            <TextField {...register("businessCategory")} fullWidth variant="outlined" size="small" />

            <Typography sx={{ color: "#e67e22", fontWeight: "bold", mt: 2, mb: 0.5 }}>Product Category*</Typography>
            <TextField select {...register("productCategory")} fullWidth variant="outlined" size="small">
              <MenuItem value="category1">Category 1</MenuItem>
              <MenuItem value="category2">Category 2</MenuItem>
              <MenuItem value="category3">Category 3</MenuItem>
            </TextField>

            <Typography sx={{ color: "#e67e22", fontWeight: "bold", mt: 2, mb: 0.5 }}>Product Name*</Typography>
            <TextField {...register("productName")} fullWidth variant="outlined" size="small" />

            <Typography sx={{ color: "#e67e22", fontWeight: "bold", mt: 2, mb: 0.5 }}>Price*</Typography>
            <TextField {...register("price")} fullWidth variant="outlined" size="small" />

            <Typography sx={{ color: "#e67e22", fontWeight: "bold", mt: 2, mb: 0.5 }}>Description</Typography>
            <TextField {...register("description")} fullWidth multiline rows={3} variant="outlined" size="small" />

            <Typography sx={{ color: "#e67e22", fontWeight: "bold", mt: 2, mb: 0.5 }}>Stock Availability*</Typography>
            <TextField {...register("stockAvailability")} fullWidth variant="outlined" size="small" />

            <Box textAlign="center" mt={3} p={3} border="1px dashed #e67e22" bgcolor="#f9f9f9">
              <Typography sx={{ color: "#e67e22", fontStyle: "italic" }}>Add Product Photo</Typography>
            </Box>

            <Box textAlign="center" mt={3}>
              <Button type="submit" variant="contained" color="primary" sx={{ px: 4, py: 1, textTransform: "none" }}>
                Submit
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Footer />
    </div>
  );
};

export default BusinessDetails;
