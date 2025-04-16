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
import { API } from "../../services/api"; // Adjust path if needed

export default function Banner() {
  const [title, setTitle] = useState("");
  const [altText, setAltText] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [banners, setBanners] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const response = await API.getBanner(); // You must have this in your API.js
      setBanners(response.data?.data || []);
    } catch (error) {
      console.error("Failed to fetch banners:", error);
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    if (!title || !altText || !image) {
      setMessage("All fields are required!");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("altText", altText);
    formData.append("image", image);

    try {
      const response = await API.uploadBanner(formData); // API.uploadBanner() should be defined
      if (response.isSuccess) {
        setMessage("Banner added successfully!");
        setTitle("");
        setAltText("");
        setImage(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        fetchBanners(); // Refresh list
      } else {
        setMessage("Failed to add banner.");
      }
    } catch (error) {
      console.error("Error uploading banner:", error);
      setMessage("Error uploading banner.");
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await API.deleteBanner({ id }); // API.deleteBanner() should be defined
      setBanners((prev) => prev.filter((banner) => banner._id !== id));
    } catch (error) {
      console.error("Failed to delete banner:", error);
    }
  };

  return (
    <Box sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        Add a Banner
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
          label="Alt Text"
          variant="outlined"
          fullWidth
          margin="dense"
          value={altText}
          onChange={(e) => setAltText(e.target.value)}
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

      {/* Banner List */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          All Banners
        </Typography>
        <Grid container spacing={2}>
          {banners.map((banner) => (
            <Grid item xs={12} sm={6} key={banner._id}>
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
                    src={banner.imageURL}
                    alt={banner.altText}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {banner.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {banner.altText}
                  </Typography>
                </CardContent>
                <IconButton onClick={() => handleDelete(banner._id)} color="error">
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
