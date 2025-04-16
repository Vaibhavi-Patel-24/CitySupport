import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { API } from "../../services/api";

const Banner = () => {
  const [altText, setAltText] = useState("");
  const [image, setImage] = useState(null);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  // Fetch banners when the component mounts
  useEffect(() => {
    fetchBanners();
  }, []);

  // Log banners to the console for debugging
  useEffect(() => {
    console.log(banners);
  }, [banners]);

  // Fetch banners from the API
  const fetchBanners = async () => {
    try {
      const response = await API.getBanner();
      const data = response.data?.data || []; // adjust this based on your API shape
      const formattedBanners = data.map((item) => ({
        imageURL: item.imageURL,
        altText: item.altText || "banner",
        _id: item._id,
      }));
      setBanners(formattedBanners);
    } catch (error) {
      console.error("Failed to fetch banners:", error);
    }
  };

  // Handle image change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission to upload a banner
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    if (!image || !altText) {
      setMessage("Both image and alt text are required.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("altText", altText);

    try {
      const response = await API.uploadBanner(formData);
      if (response.isSuccess) {
        setMessage("Banner uploaded successfully!");
        setAltText("");
        setImage(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        fetchBanners(); // Refresh the banner list after upload
      } else {
        setMessage("Upload failed.");
      }
    } catch (error) {
      console.error("Upload Error:", error);
      setMessage("An error occurred during upload.");
    }

    setLoading(false);
  };

  // Handle deleting a banner
  const handleDelete = async (id) => {
    try {
      const response = await API.deleteBanner({ id });
      if (response.isSuccess) {
        setMessage("Banner deleted successfully.");
        fetchBanners(); // Refresh the banner list after deletion
      } else {
        setMessage("Failed to delete.");
      }
    } catch (error) {
      console.error("Delete Error:", error);
      setMessage("An error occurred while deleting.");
    }
  };

  return (
    <Box sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        Upload Banner Image
      </Typography>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <TextField
          label="Alt Text"
          variant="outlined"
          fullWidth
          margin="dense"
          value={altText}
          onChange={(e) => setAltText(e.target.value)}
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
          type="submit"
          sx={{ marginTop: 2, backgroundColor: "#7622D7", color: "white" }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Upload"}
        </Button>
      </form>

      {message && (
        <Typography
          sx={{
            marginTop: 2,
            color: message.includes("successfully") ? "green" : "red",
          }}
        >
          {message}
        </Typography>
      )}

      <Typography variant="h6" sx={{ marginTop: 4 }}>
        Uploaded Banners
      </Typography>
      
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        {banners.map((banner) => (
          <Grid item xs={12} sm={6} md={4} key={banner._id}>
            <Card sx={{ position: "relative" }}>
              <Box sx={{ height: 180, overflow: "hidden" }}>
                <img
                  src={banner.imageURL}
                  alt={banner.altText}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {banner.altText}
                </Typography>
              </CardContent>
              <IconButton
                onClick={() => handleDelete(banner._id)}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "#fff",
                }}
              >
                <DeleteIcon color="error" />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Banner;