import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { API } from "../services/api"; // Your backend API service

const PopularPlaces = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await API.getPopularPlaces(); // Adjust API method name if needed
        setPlaces(response.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch popular places:", error);
      }
    };
    fetchPlaces();
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
    <Box sx={{ p: 4, maxWidth: "1200px", marginX: "auto" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Popular Places
      </Typography>
      <Grid container spacing={4}>
        {/* Left side: Places list */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxHeight: 400,
              overflowY: "auto",
            }}
          >
            {places.map((place) => (
              <Card
                key={place._id || place.id}
                onClick={() => handleCardClick(place)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 1,
                  cursor: "pointer",
                  boxShadow: 2,
                  borderRadius: 2,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 4,
                  },
                }}
              >
                <Box
                  component="img"
                  src={place.imageURL || place.image}
                  alt={place.title || place.name}
                  sx={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: 1,
                    mr: 2,
                  }}
                />
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="body1" fontWeight="bold">
                    {place.title || place.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>

        {/* Right side: Static YouTube video */}
        <Grid item xs={12} sm={8}>
          <Box
            sx={{
              width: "100%",
              height: 400,
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/k3OolA45orE"
              title="Popular Place Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ aspectRatio: "16/9" }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Dialog for place details */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {selectedPlace?.title || selectedPlace?.name}
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedPlace?.imageURL || selectedPlace?.image ? (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <img
                src={selectedPlace.imageURL || selectedPlace.image}
                alt={selectedPlace.title || selectedPlace.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: 250,
                  objectFit: "contain",
                  borderRadius: 8,
                }}
              />
            </Box>
          ) : null}
          <DialogContentText>
            {selectedPlace?.description || "No description available."}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default PopularPlaces;
