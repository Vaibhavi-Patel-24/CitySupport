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
  IconButton
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { API } from "../../services/api";

export default function MustVisit() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
      const response = await API.getMustVisit();
      setPlaces(response.data?.data || []);
    } catch (error) {
      console.error("Failed to fetch places:", error);
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    if (!title || !description || !image) {
      setMessage("All fields are required!");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await API.mustVisit(formData);

      if (response.isSuccess) {
        setMessage("Place added successfully!");
        setTitle("");
        setDescription("");
        setImage(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        fetchPlaces(); // Refresh list
      } else {
        setMessage("Failed to add place.");
      }
    } catch (error) {
      console.error("Error uploading place:", error);
      setMessage("Error uploading place.");
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await API.deleteMustVisit(id);
      setPlaces((prev) => prev.filter((place) => place._id !== id));
    } catch (error) {
      console.error("Failed to delete place:", error);
    }
  };

  return (
    <Box sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        Add a Must Visit Place
      </Typography>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="dense"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="dense"
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Box sx={{ marginTop: 2 }}>
          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} />
        </Box>

        <Button
          variant="contained"
          sx={{ marginTop: 2, backgroundColor: "#7622D7", color: "white" }}
          type="submit"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Upload"}
        </Button>
      </form>

      {message && <Typography sx={{ marginTop: 2, color: "green" }}>{message}</Typography>}

      {/* Must Visit List */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          All Must Visit Places
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
                  p: 1
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
                    src={place.imageURL}
                    alt={place.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {place.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {place.description}
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
