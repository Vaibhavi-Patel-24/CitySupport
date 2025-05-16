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
import { API } from "../../services/api"; // Ensure this API service includes like functionality
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const AdminEvent = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(dayjs());
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = useState(""); // ✅ Added for eventType (required by backend)


  const imageInputRef = useRef(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await API.getEvent(); // Ensure this endpoint is set up on the backend
      setEvents(response.data?.data || []);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    if (!title || !author || !image || !date || !eventType) {
      setMessage("All fields including image are required!");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    // formData.append("date", date.format("YYYY-MM-DD"));
    formData.append("image", image);
    formData.append("eventType", eventType);
    formData.append("date", date.toISOString()); // Sends as ISO format (e.g., 2025-05-15T00:00:00.000Z)


    try {
      const response = await API.event(formData); // Ensure this endpoint is set up on the backend

      if (response.isSuccess) {
        setMessage("Event added successfully!");
        setTitle("");
        setAuthor("");
        setImage(null);
        setEventType("");
        imageInputRef.current.value = "";
        fetchEvents();
      } else {
        setMessage("Failed to add event.");
      }
    } catch (error) {
      console.error("Error uploading event:", error);
      setMessage("Error uploading event.");
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await API.deleteEvent({ id }); // Ensure you have this endpoint set up on the backend
      setEvents((prev) => prev.filter((event) => event._id !== id));
    } catch (error) {
      console.error("Failed to delete event:", error);
    }
  };

  const handleLike = async (id, currentLikes) => {
    try {
      const response = await API.likeEvent(id); // Endpoint to increment likes
      if (response.isSuccess) {
        const updatedEvents = events.map((event) =>
          event._id === id ? { ...event, likes: currentLikes + 1 } : event
        );
        setEvents(updatedEvents); // Update the state with the incremented like count
      }
    } catch (error) {
      console.error("Failed to like event:", error);
    }
  };

  return (
    <Box sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        Add an Event
      </Typography>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="dense"
          multiline
          rows={2}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          label="Author"
          variant="outlined"
          fullWidth
          margin="dense"
          multiline
          rows={1}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <TextField
          label="Event Type"
          variant="outlined"
          fullWidth
          margin="dense"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)} // ✅ Added input for eventType
        />


        <Box sx={{ marginTop: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              renderInput={(params) => (
                <TextField {...params} fullWidth margin="dense" variant="outlined" />
              )}
            />
          </LocalizationProvider>
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Typography>Upload Event Image</Typography>
          <input type="file" accept="image/*" ref={imageInputRef} onChange={handleImageChange} />
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

      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          All Events
        </Typography>

        <Grid container spacing={2}>
  {events.map((event) => (
    
    
    <Grid item xs={12} sm={6} md={4} key={event._id}>
  <Card sx={{ maxWidth: 290, boxShadow: 3 }}>
    
    {/* Image wrapper box */}
    <Box sx={{ position: 'relative' }}>
      <CardMedia
        sx={{ height: 150 }}
        image={event.image}
        title={event.title}
      />
      
      {/* Delete button inside image */}
      <IconButton
        onClick={() => handleDelete(event._id)}
        color="error"
        sx={{ position: 'absolute', top: 8, right: 8 }}
      >
        <DeleteIcon />
      </IconButton>
    </Box>

    <CardContent>
      <Typography sx={{ fontWeight: 600 }}>
        {event.title}
      </Typography>
      <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
        {event.author}
      </Typography>
    </CardContent>

    <CardActions>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <Typography sx={{ fontSize: "14px", color: "text.secondary" }}>
          {dayjs(event.date).format("YYYY-MM-DD")}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton onClick={() => handleLike(event._id, event.likes)}>
            {event.likes > 0 ? (
              <FavoriteIcon sx={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: "red" }} />
            )}
          </IconButton>
          <Typography sx={{ fontSize: "14px" }}>{event.likes}</Typography>
        </Box>
      </Box>
    </CardActions>

  </Card>
</Grid>


    
  ))}
</Grid>

      </Box>
    </Box>
  );
};

export default AdminEvent;
