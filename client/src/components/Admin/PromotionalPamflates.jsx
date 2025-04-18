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
import { API } from "../../services/api"; // Make sure you have proper endpoints in your API file

const PromotionalPamphlet = () => {
  const [altText, setAltText] = useState("");
  const [image, setImage] = useState(null);
  const [pamphlets, setPamphlets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchPamphlets();
  }, []);

  const fetchPamphlets = async () => {
    try {
      const response = await API.getPamphlets(); // Make sure this API method exists
      const data = response.data?.data || [];
      const formatted = data.map((item) => ({
        imageURL: item.imageURL,
        altText: item.altText || "pamphlet",
        _id: item._id,
      }));
      setPamphlets(formatted);
    } catch (error) {
      console.error("Failed to fetch pamphlets:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

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
      const response = await API.uploadPamphlet(formData); // Adjust this method in your API file
      if (response.isSuccess) {
        setMessage("Pamphlet uploaded successfully!");
        setAltText("");
        setImage(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        fetchPamphlets();
      } else {
        setMessage("Upload failed.");
      }
    } catch (error) {
      console.error("Upload Error:", error);
      setMessage("An error occurred during upload.");
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      const response = await API.deletePamphlet({ id }); // Adjust this method in your API file
      if (response.isSuccess) {
        setMessage("Pamphlet deleted successfully.");
        fetchPamphlets();
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
        Upload Promotional Pamphlet
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
        Uploaded Pamphlets
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        {pamphlets.map((pamphlet) => (
          <Grid item xs={12} sm={6} md={4} key={pamphlet._id}>
            <Card sx={{ position: "relative" }}>
              <Box sx={{ height: 180, overflow: "hidden" }}>
                <img
                  src={pamphlet.imageURL}
                  alt={pamphlet.altText}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {pamphlet.altText}
                </Typography>
              </CardContent>
              <IconButton
                onClick={() => handleDelete(pamphlet._id)}
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

export default PromotionalPamphlet;
