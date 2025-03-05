import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalBreadcrumbs from "../components/GlobalBreadcrumbs";
import { Container, Typography, Grid, Box, Button } from "@mui/material";

// Service data
const services = [
  { name: "TICKET BOOKING", icon: "🎟️" },
  { name: "WATER METER", icon: "🚰" },
  { name: "COMMUNITY HALL BOOKING", icon: "🏛️" },
  { name: "STADIUM BOOKING", icon: "🏟️" },
  { name: "WASTE MANAGEMENT", icon: "♻️" },
  { name: "PUBLIC TRANSPORT SCHEDULES", icon: "🚌" },
];

const emergencyServices = [
  { name: "POLICE STATION", icon: "🚓" },
  { name: "FIRE STATION", icon: "🔥" },
  { name: "HEALTH SERVICES", icon: "⚕️" },
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
        fontSize: "28px",
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
