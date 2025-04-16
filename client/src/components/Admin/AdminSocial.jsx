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

const AdminSocial = () => {
const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(dayjs());
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [blogs, setBlogs] = useState([]);
  const fileInputRef = useRef(null);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    if (!title || !name || !image ||!date) {
      setMessage("All fields are required!");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("name", name);
    formData.append("datePosted", date);
    formData.append("image", image);

    try {
      const response = await API.blog(formData);

      if (response.isSuccess) {
        setMessage("Blog added successfully!");
        setTitle("");
        setName("");
        setImage(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        fetchBlogs(); // Refresh list
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
      console.log(id)
      await API.deleteBlog({id});
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Failed to delete place:", error);
    }
  };
  return (
    <>
      <Box sx={{ padding: 3, marginTop: 3 }}>
            <Typography variant="h5" gutterBottom>
              Add a Blogs
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
                            <TextField
                                {...params}
                                fullWidth
                                margin="dense"
                                variant="outlined"
                            />
                            )}
                        />
                        </LocalizationProvider>
                        </Box>


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

                    
                    <Box sx={{ mt: 5 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                        All Blogs
                        </Typography>

                        <Grid container spacing={2}>
                        {blogs.map((blog) => (
                            <Grid item xs={12} sm={6} key={blog._id}>
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
                                    src={blog.imageURL}
                                    alt={blog.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                                </Box>
                                <CardContent sx={{ flex: 1 }}>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    {blog.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {blog.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {blog.date}
                                </Typography>
                                </CardContent>
                                <IconButton onClick={() => handleDelete(blog._id)} color="error">
                                <DeleteIcon />
                                </IconButton>
                            </Card>
                            </Grid>
                        ))}
                        </Grid>
                    </Box>
        </Box>
    </>
  )
}

export default AdminSocial
