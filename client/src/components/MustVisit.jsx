import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { API } from "../services/api";

const MustVisit = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await API.getMustVisit();
        setPlaces(response.data?.data || []); // adjust according to your backend response structure
      } catch (error) {
        console.error("Failed to fetch must visit places:", error);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <Box sx={{ marginX: { xs: "auto", md: "120px" }, maxWidth: "1200px" }}>
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h6"
          sx={{ color: "#FF6600", fontWeight: "bold", textAlign: "left", mb: 2 }}
        >
          ~ Must Visit
        </Typography>

        <Grid container spacing={3}>
          {places.map((place) => (
            <Grid item xs={12} sm={6} key={place._id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  padding: 1,
                  boxShadow: 2,
                  cursor: "pointer",
                  transition: "0.3s ease",
                  "&:hover": { boxShadow: 4 },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: 100 },
                    height: { xs: 180, sm: 100 },
                    flexShrink: 0,
                    overflow: "hidden",
                    borderRadius: 2,
                  }}
                >
                  <img
                    src={place.imageURL}
                    alt={place.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>

                <CardContent sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
                  <Typography variant="h6" fontWeight="bold">
                    {place.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      overflow: "hidden",
                    }}
                  >
                    {place.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MustVisit;
