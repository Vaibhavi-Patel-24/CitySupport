import React, { useState } from "react";
import { 
  Button, 
  TextField, 
  Box, 
  Typography, 
  Card, 
  CardContent,
  LinearProgress,
  Avatar
} from "@mui/material";
import { CloudUpload, CheckCircle } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const PopularPlace = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !image) {
      alert("Both title and image are required.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      // Replace with your actual endpoint
      const response = await fetch("/api/admin/popularplaces", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      alert(data.msg);
      setSuccess(true);
      // Optionally reset form
      setTitle("");
      setImage(null);
    } catch (error) {
      console.error("Error uploading place:", error);
      alert("Network error while submitting data");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "30px auto", p: 0 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" component="div" sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}>
          Add a Popular Place
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Place Title"
            placeholder="Enter place title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            sx={{ mb: 3 }}
            variant="outlined"
            size="medium"
            InputProps={{
              sx: { borderRadius: 2 }
            }}
          />

          <Button
            component="label"
            variant="outlined"
            color="primary"
            startIcon={<CloudUpload />}
            fullWidth
            sx={{
              mb: 2,
              py: 2,
              borderRadius: 2,
              borderStyle: 'dashed',
              borderWidth: 2,
              borderColor: image ? 'success.main' : 'primary.main',
              bgcolor: image ? 'success.light' : 'transparent',
              '&:hover': {
                borderColor: image ? 'success.dark' : 'primary.dark',
                borderWidth: 2
              }
            }}
          >
            {image ? 'Change Image' : 'Upload Image'}
            <VisuallyHiddenInput 
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Button>

          {image && (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2, 
              mb: 3,
              p: 2,
              borderRadius: 2,
              bgcolor: 'action.hover'
            }}>
              <Avatar 
                src={URL.createObjectURL(image)} 
                variant="rounded" 
                sx={{ width: 56, height: 56 }}
              />
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {image.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {(image.size / 1024).toFixed(2)} KB
                </Typography>
              </Box>
              {success && (
                <CheckCircle color="success" sx={{ ml: 'auto' }} />
              )}
            </Box>
          )}

          {isSubmitting && <LinearProgress sx={{ mb: 3 }} />}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            disabled={isSubmitting || !image || !title}
            sx={{
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              fontSize: 16,
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                boxShadow: 'none'
              }
            }}
          >
            {isSubmitting ? 'Uploading...' : 'Submit Place'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PopularPlace;