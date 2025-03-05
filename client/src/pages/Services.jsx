import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalBreadcrumbs from "../components/GlobalBreadcrumbs";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import { ConfirmationNumber, Opacity, Home, SportsSoccer, Recycling, DirectionsBus, LocalPolice, LocalFireDepartment, LocalHospital } from "@mui/icons-material";

// Service data with black & white icons
const services = [
  { name: "TICKET BOOKING", icon: <ConfirmationNumber sx={{ fontSize: 32, color: "black" }} /> },
  { name: "WATER METER", icon: <Opacity sx={{ fontSize: 32, color: "black" }} /> },
  { name: "COMMUNITY HALL BOOKING", icon: <Home sx={{ fontSize: 32, color: "black" }} /> },
  { name: "STADIUM BOOKING", icon: <SportsSoccer sx={{ fontSize: 32, color: "black" }} /> },
  { name: "WASTE MANAGEMENT", icon: <Recycling sx={{ fontSize: 32, color: "black" }} /> },
  { name: "PUBLIC TRANSPORT SCHEDULES", icon: <DirectionsBus sx={{ fontSize: 32, color: "black" }} /> },
];

const emergencyServices = [
  { name: "POLICE STATION", icon: <LocalPolice sx={{ fontSize: 32, color: "black" }} /> },
  { name: "FIRE STATION", icon: <LocalFireDepartment sx={{ fontSize: 32, color: "black" }} /> },
  { name: "HEALTH SERVICES", icon: <LocalHospital sx={{ fontSize: 32, color: "black" }} /> },
];

// Card component
const ServiceCard = ({ service }) => (
  <Box
    sx={{
      bgcolor: "#ddd",
      borderRadius: "8px",
      textAlign: "center",
      p: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
    }}
  >
    <Box
      sx={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        border: "2px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {service.icon}
    </Box>
    <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>{service.name}</Typography>
    <Button variant="contained" sx={{ bgcolor: "#1976d2", textTransform: "none" }}>
      Search
    </Button>
  </Box>
);

const Services = () => {
  return (
    <div className="page-container">
      <Navbar />
      <GlobalBreadcrumbs />
      <Container sx={{ mt: 4 }}>
        {/* Municipal Services */}
        <Typography variant="h6" sx={{ color: "#E87722", fontWeight: "bold", mb: 2 }}>
          Municipal services
        </Typography>
        <Grid container spacing={2}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>

        {/* Emergency Services */}
        <Typography variant="h6" sx={{ color: "#E87722", fontWeight: "bold", mt: 4, mb: 2 }}>
          Emergency services
        </Typography>
        <Grid container spacing={2}>
          {emergencyServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Services;
