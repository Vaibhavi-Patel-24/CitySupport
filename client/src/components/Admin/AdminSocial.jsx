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
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';

const AdminSocial = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(dayjs());
  const [image, setImage] = useState(null);
  const [profile, setProfile] = useState(null); // ✅ new state
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [blogs, setBlogs] = useState([]);

  const imageInputRef = useRef(null);
  const profileInputRef = useRef(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await API.getBlog();
      setBlogs(response.data?.data || []);
    } catch (error) {
      console.error("Failed to fetch blog:", error);
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleProfileChange = (event) => {
    setProfile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    if (!title || !name || !image || !profile || !date) {
      setMessage("All fields including image and profile photo are required!");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("name", name);
    formData.append("datePosted", date.format("YYYY-MM-DD"));
    formData.append("image", image);
    formData.append("profilePhoto", profile); // ✅ include profile photo

    try {
      const response = await API.blog(formData);

      if (response.isSuccess) {
        setMessage("Blog added successfully!");
        setTitle("");
        setName("");
        setImage(null);
        setProfile(null);
        imageInputRef.current.value = "";
        profileInputRef.current.value = "";
        fetchBlogs();
      } else {
        setMessage("Failed to add Blog.");
      }
    } catch (error) {
      console.error("Error uploading Blog:", error);
      setMessage("Error uploading Blog.");
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await API.deleteBlog({ id });
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  return (
    <Box sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        Add a Blog
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
          label="Name"
          variant="outlined"
          fullWidth
          margin="dense"
          multiline
          rows={1}
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          <Typography>Upload Blog Image</Typography>
          <input type="file" accept="image/*" ref={imageInputRef} onChange={handleImageChange} />
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Typography>Upload Profile Photo</Typography>
          <input type="file" accept="image/*" ref={profileInputRef} onChange={handleProfileChange} />
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
          All Blogs
        </Typography>

        <Grid container spacing={2}>
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} key={blog._id}>
              <Card sx={{ maxWidth: 310, boxShadow: 3, position: 'relative' }}>
                <CardMedia
                  sx={{ height: 180 }}
                  image={blog.imageURL}
                  title={blog.title}
                />
                <CardContent>
                  <Button
                    sx={{
                      backgroundColor: 'rgb(242,242,242)',
                      color: 'rgb(75,107,251)',
                      fontSize: '9px',
                      fontWeight: 'bold',
                      borderRadius: '20px',
                      textTransform: 'none'
                    }}
                  >
                    CitySupport
                  </Button>

                  <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '17px', marginTop: "15px" }}>
                    {blog.title}
                  </Typography>
                </CardContent>

                <Box sx={{ pb: 1, px: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar alt={blog.name} src={blog.profilePhoto || ""} sx={{ width: 32, height: 32, mr: 1 }} />
                      <Typography sx={{ color: 'rgb(151,152,159)', fontSize: '15px' }}>
                        {blog.name}
                      </Typography>
                    </Box>
                    <Typography sx={{ color: "rgb(151,152,159)", fontSize: '14px' }}>
                      {blog.datePosted}
                    </Typography>
                  </Box>
                </Box>

                <IconButton
                  onClick={() => handleDelete(blog._id)}
                  color="error"
                  sx={{ position: 'absolute', top: 5, right: 5 }}
                >
                  <DeleteIcon />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminSocial;
