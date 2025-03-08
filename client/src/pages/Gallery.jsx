import React from "react";
import { Container, Grid, Card, CardMedia, Typography, Box, IconButton, Button } from "@mui/material";
import { Facebook, Twitter } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalBreadcrumbs from "../components/GlobalBreadcrumbs";

const places = [
  { id: 1, name: "Vijay Vilas Palace", image: "https://images.unsplash.com/photo-1620103143245-9efb3e4a7553?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Adalaj Vaav", image: "https://images.unsplash.com/photo-1570605505301-0f713202ca7a?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Sun Temple", image: "https://images.unsplash.com/photo-1573131615374-9b754dfeeb0e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Polo Forest", image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/home_page/Polo.jpg" },
  { id: 5, name: "Dwarka", image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/dwarkadhish-temple/Dwarkadhish-Temple-1.jpg" },
  { id: 6, name: "Rani Ki Vaav", image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/home_page/Rani-Ki-Vav.jpg" },
];

const Gallery = () => {
  return (
    <div className="page-container">
      <Navbar />
      <GlobalBreadcrumbs />

      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#E87722", mb: 2 }}>
          Gallery
        </Typography>

        <Grid container spacing={3}>
          {places.map((place) => (
            <Grid item xs={12} sm={6} key={place.id}>
              <Card
                sx={{
                  position: "relative",
                  height: 300,
                  borderRadius: 2,
                  overflow: "hidden",
                  "&:hover .hover-overlay": { opacity: 1, bottom: 0 },
                }}
              >
                {/* Background Image */}
                <CardMedia component="img" height="100%" image={place.image} alt={place.name} />

                {/* Default Overlay (Visible All the Time) */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.6)",
                    color: "#fff",
                    textAlign: "center",
                    p: 2,
                  }}
                >
                  <Typography variant="h6">{place.name}</Typography>

                  {/* Social Icons (Always Visible) */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 2,
                      mt: 1,
                      pointerEvents: "auto", // Ensures icons are always clickable
                    }}
                  >
                    <IconButton sx={{ color: "#fff", p: 0.5 }}>
                      <Twitter fontSize="small" />
                    </IconButton>
                    <IconButton sx={{ color: "#fff", p: 0.5 }}>
                      <Facebook fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>

                {/* Hover Overlay */}
                <Box
                  className="hover-overlay"
                  sx={{
                    position: "absolute",
                    bottom: "-100%",
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "#472F72",
                    color: "#fff",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    transition: "opacity 0.3s, bottom 0.3s",
                  }}
                >
                  {/* Place Name */}
                  <Typography variant="h6" sx={{ mb: 2 }}>{place.name}</Typography>

                  {/* View Gallery Button */}
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#E87722",
                      color: "#fff",
                      textTransform: "none",
                      fontSize: "14px",
                      mb: 3,
                      "&:hover": { bgcolor: "#d0651a" },
                    }}
                  >
                    View Gallery
                  </Button>

                  {/* Social Icons (Re-Positioned to Stay in the Same Spot on Hover) */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      pointerEvents: "auto",
                    }}
                  >
                    <IconButton sx={{ color: "#fff", p: 0.5 }}>
                      <Twitter fontSize="small" />
                    </IconButton>
                    <IconButton sx={{ color: "#fff", p: 0.5 }}>
                      <Facebook fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};

export default Gallery;
