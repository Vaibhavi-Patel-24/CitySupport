import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalBreadcrumbs from "../components/GlobalBreadcrumbs";
import { Container, Typography, Box, Button } from "@mui/material";
import MapIcon from "@mui/icons-material/Map"; // Icon for the button

const Transports = () => {
  return (
    <div className="page-container">
      <Navbar />
      <GlobalBreadcrumbs />

      <Container sx={{ mt: 4 }}>
        {/* City Bus Routes Section */}
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#E87722", mb: 2 }}>
          City Bus Routes
        </Typography>

        {/* Mock Map */}
        <Box
          sx={{
            border: "3px solid #1976d2",
            borderRadius: "10px",
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="" // Place the image inside public/assets/
            alt="City Bus Route Map"
            style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }}
          />
          <Button
            variant="contained"
            sx={{ mt: 2, bgcolor: "#1976d2", color: "#fff", "&:hover": { bgcolor: "#1565c0" } }}
            startIcon={<MapIcon />}
          >
            Open in Map
          </Button>
        </Box>

        {/* Metro Routes Section */}
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#E87722", mt: 4, mb: 2 }}>
          Metro Routes
        </Typography>

        {/* Data Unavailable Placeholder */}
        <Box
          sx={{
            border: "2px solid #ddd",
            borderRadius: "10px",
            textAlign: "center",
            bgcolor: "#f5f5f5",
            py: 4,
          }}
        >
          <Typography sx={{ color: "#9e9e9e", fontSize: "18px", fontWeight: "bold" }}>
            Data Unavailable
          </Typography>
        </Box>
      </Container>

      <Footer />
    </div>
  );
};

export default Transports;
