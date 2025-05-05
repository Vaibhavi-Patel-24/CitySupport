import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { API } from "../services/api";

const PopularPlaces = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchPopularPlaces = async () => {
      try {
        const response = await API.getPopularPlaces();
        setPlaces(response.data?.data || []);
      } catch (error) {
        console.error("Error fetching popular places:", error);
      }
    };

    fetchPopularPlaces();
  }, []);

  const handleCardClick = (place) => {
    setSelectedPlace(place);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPlace(null);
  };

  return (
    <Box sx={{ marginX: { xs: "auto", md: "120px" }, maxWidth: "1200px" }}>
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h6"
          sx={{ color: "#3f51b5", fontWeight: "bold", textAlign: "left", mb: 2 }}
        >
          ~ Popular Places
        </Typography>

        {/* --- YOUTUBE VIDEO --- */}
        <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/k3OolA45orE" // <-- Replace with actual video ID
            title="Popular Places Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "10px", maxWidth: "1000px" }}
          ></iframe>
        </Box>

        {/* --- PLACE CARDS --- */}
        <Grid container spacing={3}>
          {places.map((place) => (
            <Grid item xs={12} sm={6} md={4} key={place._id}>
              <Card
                onClick={() => handleCardClick(place)}
                sx={{
                  height: "100%",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { boxShadow: 4 },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 200,
                    overflow: "hidden",
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}
                >
                  <img
                    src={place.image}
                    alt={place.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {place.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      overflow: "hidden",
                    }}
                  >
                    No description available.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* --- DIALOG --- */}
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            {selectedPlace?.name}
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {selectedPlace?.image && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "250px",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            )}
            <DialogContentText>No description available.</DialogContentText>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default PopularPlaces;
