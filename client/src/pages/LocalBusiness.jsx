import React from "react";
import { Box, Button, Card, CardContent, Typography, Container } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalBreadcrumbs from "../components/GlobalBreadcrumbs";
import restaurant_1 from '../images/restaurant_1.jpeg';
import shop from '../images/shop.jpg';
import mall from '../images/mall.jpeg';
import bannerlb from '../images/bannerlb.png';
import furniture2 from '../images/furniture2.jpeg';
import medical from '../images/medical.jpeg';

// Categories Data
const categories = [
  { title: "RESTAURANTS", description: "Discover hidden foodie spots you'll love.", image: restaurant_1, area: "restaurants" },
  { title: "SHOPS", description: "Support small businesses and shop local.", image: shop, area: "shops" },
  { title: "MALL", description: "Your destination for style, food, and fun.", image: mall, area: "mall" },
  { title: "FURNITURE", description: "Custom-made furniture to suit your taste and space.", image: furniture2, area: "furniture" },
  { title: "MEDICAL", description: "Compassionate medical services close to home.", image: medical, area: "medical" },
];

const LocalBusiness = () => {
  return (
    <Box sx={{ fontFamily: "Arial, sans-serif", bgcolor: "#f5f5f5" }}>
      <Navbar />
      <GlobalBreadcrumbs />

      {/* Hero Section (Banner) */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "250px", md: "300px" },
          backgroundImage: `url(${bannerlb})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          px: { xs: 2, md: 12 },
          maxWidth: { md: "1200px" }, // Ensure banner width matches card layout
          marginX: "auto", // Center the banner
        }}
      >
        <Box sx={{ maxWidth: "600px" }}>
          <Typography variant="h4" fontWeight="bold" color="black" sx={{ textTransform: "uppercase" }}>
            EXPLORE NOW
          </Typography>
          <Typography variant="h3" fontWeight="bold" color="black" sx={{ mt: 1 }}>
            LOCAL BUSINESS
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#1976d2",
              fontSize: "16px",
              borderRadius: "25px",
              fontWeight: "bold",
              textTransform: "uppercase",
              px: 4,
              "&:hover": { bgcolor: "#1256a0" },
            }}
          >
            JOIN NOW
          </Button>
        </Box>
      </Box>

      {/* Cards Section */}
      <Container maxWidth="xl" sx={{ py: 5, px: { xs: 2, md: 12 }, maxWidth: "1200px", marginX: "auto" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, // 3 columns on medium screens and up
            gridTemplateRows: "1fr 1fr",
            gap: 3,
            alignItems: "stretch",
          }}
        >
          {categories.map((category, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: 3,
                bgcolor: "#fff",
                display: "flex",
                flexDirection: "column", // Ensures consistent layout for card content
                height: "100%", // Ensures all cards are of the same height
                minHeight: "350px", // Minimum height for uniformity
              }}
            >
              {/* Image Section */}
              <Box
                sx={{
                  height: "200px", // Keep image size consistent
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Card Content Section */}
              <CardContent
                sx={{
                  textAlign: "center",
                  p: 2,
                  flexGrow: 1, // Ensures content fills the card height evenly
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" fontWeight="bold" sx={{ textTransform: "uppercase" }}>
                  {category.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ my: 1 }}>
                  {category.description}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  endIcon={<ArrowDropDown />}
                  sx={{
                    mt: 1,
                    bgcolor: "#1976d2",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    py: 1,
                    px: 2, // Reduced padding to make the button less wide
                    width: "200px", // Let the button size adjust based on content
                    justifyContent:"center",
                    textAlign:"center",
                    textTransform: "uppercase",
                    "&:hover": { bgcolor: "#1256a0" },
                  }}
                >
                  EXPLORE NOW
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default LocalBusiness;
