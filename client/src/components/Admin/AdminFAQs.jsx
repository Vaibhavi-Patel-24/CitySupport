import React, { useEffect, useState } from "react";
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, Typography, TextField, Button, Grid, Box 
} from "@mui/material";
import { API } from "../../services/api"; 

const ManageFAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    try {
      const response = await API.getFAQs();
      if (response.isSuccess) {
        setFaqs(response.data);
      } else {
        console.error("Failed to fetch FAQs");
      }
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    }
  };

  const handleAddFAQ = async () => {
    if (!title || !description) {
        alert("Title and Description are required!");
        return;
    }

    try {
        const response = await API.addFAQ({ title, description });
        if (response && response.isSuccess) {
            fetchFAQs();
            setTitle("");
            setDescription("");
        } else {
            console.error("Failed to add FAQ: Invalid response data");
        }
    } catch (error) {
        console.error("Error adding FAQ:", error);
    }
};

  const handleDelete = async (id) => {
    if (!id) return;

    try {
        const response = await API.deleteFAQ({ id });
        if (response && response.isSuccess) {
            setFaqs((prevFaqs) => prevFaqs.filter(faq => faq._id !== id));
        } else {
            console.error("Failed to delete FAQ");
        }
    } catch (error) {
        console.error("Error deleting FAQ:", error);
    }
};

  const handleEdit = (faq) => {
    setEditingId(faq._id);
    setEditTitle(faq.title);
    setEditDescription(faq.description);
  };

  const handleUpdate = async (id) => {
    const updatedData = { id, title: editTitle, description: editDescription };

    try {
        const response = await API.updateFAQ(updatedData);
        if (response && response.isSuccess) {
            fetchFAQs();
            setEditingId(null);
        } else {
            console.error("Failed to update FAQ");
        }
    } catch (error) {
        console.error("Error updating FAQ:", error);
    }
};

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Manage FAQs
      </Typography>

      {/* Add FAQ Form */}
      <TextField
        label="FAQ Title"
        variant="outlined"
        fullWidth
        margin="dense"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="FAQ Description"
        variant="outlined"
        fullWidth
        multiline
        rows={3}
        margin="dense"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleAddFAQ}
          sx={{ width: { xs: "100%", sm: "auto" } }}
        >
          Add FAQ
        </Button>
      </Box>

      {/* FAQs List */}
      <Table sx={{ marginTop: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell><strong>S.No.</strong></TableCell>
            <TableCell><strong>Title</strong></TableCell>
            <TableCell><strong>Description</strong></TableCell>
            <TableCell><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <TableRow key={faq._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {editingId === faq._id ? (
                    <TextField
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      fullWidth
                    />
                  ) : (
                    faq.title
                  )}
                </TableCell>
                <TableCell>
                  {editingId === faq._id ? (
                    <TextField
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      fullWidth
                      multiline
                      rows={2}
                    />
                  ) : (
                    faq.description
                  )}
                </TableCell>
                <TableCell>
                  {editingId === faq._id ? (
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button 
                        variant="contained" 
                        color="success" 
                        onClick={() => handleUpdate(faq._id)}
                        sx={{ width: { xs: "100%", sm: "auto" } }}
                      >
                        Save
                      </Button>
                      <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => setEditingId(null)}
                        sx={{ width: { xs: "100%", sm: "auto" } }}
                      >
                        Cancel
                      </Button>
                    </Box>
                  ) : (
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button 
                        variant="contained" 
                        color="warning" 
                        onClick={() => handleEdit(faq)}
                        sx={{ width: { xs: "100%", sm: "auto" } }}
                      >
                        Edit
                      </Button>
                      <Button 
                        variant="contained" 
                        color="error" 
                        onClick={() => handleDelete(faq._id)}
                        sx={{ width: { xs: "100%", sm: "auto" } }}
                      >
                        Delete
                      </Button>
                    </Box>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">No FAQs found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageFAQs;
