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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import { API } from "../../services/api";

export default function LocalBusinessAdmin() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [smallDesc, setSmallDesc] = useState("");
  const [venue, setVenue] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [businesses, setBusinesses] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentBusinessId, setCurrentBusinessId] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const fetchBusinesses = async () => {
    try {
      setLoading(true);
      const response = await API.getHomeBussinesses();
      setBusinesses(response.data?.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch businesses:", error);
      setLoading(false);
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setTime("");
    setSmallDesc("");
    setVenue("");
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setEditMode(false);
    setCurrentBusinessId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    if (!name || !description || !venue || (!image && !editMode)) {
      setMessage("Name, description, venue and image are required fields!");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("time", time);
    formData.append("smallDesc", smallDesc);
    formData.append("venue", venue);
    if (image) {
      formData.append("image", image);
    }

    try {
      let response;
      if (editMode) {
        formData.append("id", currentBusinessId);
        response = await API.updateHomeBussiness(formData); // ✅ spelling fixed
      } else {
        response = await API.uploadHomeBussinesses(formData);
      }

      if (response.isSuccess) {
        setMessage(editMode ? "Business updated successfully!" : "Business added successfully!");
        resetForm();
        fetchBusinesses();
      } else {
        setMessage(editMode ? "Failed to update business." : "Failed to add business.");
      }
    } catch (error) {
      console.error("Error processing business data:", error);
      setMessage("Error processing business data.");
    }
    setLoading(false);
  };

  const handleEdit = (business) => {
    setName(business.name);
    setDescription(business.description);
    setTime(business.time || "");
    setSmallDesc(business.smallDesc || "");
    setVenue(business.venue);
    setCurrentBusinessId(business._id);
    setEditMode(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    setDialogOpen(true);
    setCurrentBusinessId(id);
  };

  const confirmDelete = async () => {
    try {
      await API.deleteHomeBussinesses({ id: currentBusinessId });
      setBusinesses((prev) => prev.filter((business) => business._id !== currentBusinessId));
      setMessage("Business deleted successfully!");
      setDialogOpen(false);
    } catch (error) {
      console.error("Failed to delete business:", error);
      setMessage("Failed to delete business.");
      setDialogOpen(false);
    }
  };

  const cancelDelete = () => {
    setDialogOpen(false);
    setCurrentBusinessId(null);
  };

  return (
    <Box sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        {editMode ? "Edit Business" : "Add a Local Business"}
      </Typography>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <TextField
          label="Business Name"
          variant="outlined"
          fullWidth
          margin="dense"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
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
          required
        />
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              label="Business Hours"
              variant="outlined"
              fullWidth
              placeholder="e.g., 9:00 AM - 5:00 PM"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </Grid>
        </Grid>
        <TextField
          label="Additional Description"
          variant="outlined"
          fullWidth
          margin="dense"
          multiline
          rows={2}
          value={smallDesc}
          onChange={(e) => setSmallDesc(e.target.value)}
        />
        <TextField
          label="Venue/Location"
          variant="outlined"
          fullWidth
          margin="dense"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          required
        />
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body2" gutterBottom>
            {editMode && "Upload new image (leave empty to keep current image)"}
          </Typography>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            {...(!editMode && { required: true })}
          />
        </Box>
        <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            type="submit"
            disabled={loading}
            sx={{ backgroundColor: "#7622D7", color: "white" }}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : editMode ? "Update Business" : "Add Business"}
          </Button>
          {editMode && (
            <Button
              variant="outlined"
              onClick={resetForm}
              sx={{ color: "#7622D7", borderColor: "#7622D7" }}
            >
              Cancel Edit
            </Button>
          )}
        </Box>
      </form>

      {message && (
        <Typography sx={{ marginTop: 2, color: message.includes("successfully") ? "green" : "red" }}>
          {message}
        </Typography>
      )}

      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          All Local Businesses
        </Typography>
        {loading && !businesses.length ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2}>
            {businesses.map((business) => (
              <Grid item xs={12} key={business._id}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: "center",
                    boxShadow: 3,
                    p: 2,
                    position: 'relative'
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', md: 200 },
                      height: { xs: 180, md: 150 },
                      overflow: "hidden",
                      borderRadius: 2,
                      mr: { xs: 0, md: 2 },
                      mb: { xs: 2, md: 0 }
                    }}
                  >
                    <img
                      src={business.imageURL || '/default-placeholder.png'}
                      alt={business.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Box>
                  <CardContent sx={{ flex: 1, p: { xs: 1, md: 2 } }}>
                    <Typography variant="h6" fontWeight="bold">
                      {business.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {business.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CalendarMonthIcon sx={{ fontSize: 20, mr: 0.5, color: '#7622D7' }} />
                        <Typography variant="body2">
                          {business.time}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PlaceIcon sx={{ fontSize: 20, mr: 0.5, color: '#7622D7' }} />
                        <Typography variant="body2">
                          {business.venue}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                  <Box sx={{ display: 'flex', gap: 1, mt: { xs: 1, md: 0 } }}>
                    <IconButton onClick={() => handleEdit(business)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(business._id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        {!loading && businesses.length === 0 && (
          <Typography variant="body1" sx={{ textAlign: 'center', my: 4 }}>
            No businesses added yet.
          </Typography>
        )}
      </Box>

      <Dialog open={dialogOpen} onClose={cancelDelete}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this business? This action cannot be undone.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete}>Cancel</Button>
          <Button onClick={confirmDelete} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
