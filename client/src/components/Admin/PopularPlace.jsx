import React, { useState, useEffect, useRef } from "react";
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { API } from "../../services/api";

export default function PopularPlacesAdmin() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [places, setPlaces] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    try {
      const response = await API.getPopularPlaces();
      setPlaces(response.data?.data || []);
    } catch (error) {
      console.error("Failed to fetch popular places:", error);
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    if (!name || !image) {
      setMessage("Both name and image are required!");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    try {
      const response = await API.popularPlaces(formData);

      if (response.isSuccess) {
        setMessage("Popular place added successfully!");
        setName("");
        setImage(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        fetchPlaces(); // Refresh list
      } else {
        setMessage("Failed to add popular place.");
      }
    } catch (error) {
      console.error("Error uploading popular place:", error);
      setMessage("Error uploading popular place.");
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await API.deletePopularPlace({ id });
      setPlaces((prev) => prev.filter((place) => place._id !== id));
    } catch (error) {
      console.error("Failed to delete popular place:", error);
    }
  };

  return (
    <Box sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        Add a Popular Place
      </Typography>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="dense"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Box sx={{ marginTop: 2 }}>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
        </Box>

        <Button
          variant="contained"
          sx={{ marginTop: 2, backgroundColor: "#7622D7", color: "white" }}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "white" }} />
          ) : (
            "Upload"
          )}
        </Button>
      </form>

      {message && (
        <Typography sx={{ marginTop: 2, color: message.includes("failed") ? "red" : "green" }}>
          {message}
        </Typography>
      )}

      {/* Popular Places List */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          All Popular Places
        </Typography>
        <Grid container spacing={2}>
          {places.map((place) => (
            <Grid item xs={12} sm={6} key={place._id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  boxShadow: 3,
                  p: 1,
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    overflow: "hidden",
                    borderRadius: 2,
                    mr: 2,
                  }}
                >
                  <img
                    src={place.imageURL || place.image}
                    alt={place.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {place.name}
                  </Typography>
                </CardContent>
                <IconButton onClick={() => handleDelete(place._id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
