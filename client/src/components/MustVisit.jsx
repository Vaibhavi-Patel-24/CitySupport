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
import { API } from "../services/api";

const MustVisit = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await API.getMustVisit();
        setPlaces(response.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch must visit places:", error);
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
                onClick={() => handleCardClick(place)}
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

        {/* Dialog showing title, full image, and description */}
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            {selectedPlace?.title}
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {selectedPlace?.imageURL && (
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
                src={selectedPlace.imageURL}
                alt={selectedPlace.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "250px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Box>
            
            )}
            <DialogContentText>{selectedPlace?.description}</DialogContentText>
          </DialogContent>

        </Dialog>
      </Box>
    </Box>
  );
};

export default MustVisit;
