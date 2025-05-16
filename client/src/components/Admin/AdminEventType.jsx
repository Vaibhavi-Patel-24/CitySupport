import React, { useEffect, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Typography, TextField, Button, Box
} from "@mui/material";
import { API } from "../../services/api";

const ManageEventTypes = () => {
  const [eventTypes, setEventTypes] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchEventTypes();
  }, []);

  const fetchEventTypes = async () => {
    try {
      const response = await API.getEventTypes();
      console.log("fetch data:",response.data.data)
      if (response.isSuccess) {
        setEventTypes(response.data.data);
      } else {
        console.error("Failed to fetch Event Types");
      }
    } catch (error) {
      console.error("Error fetching Event Types:", error);
    }
  };

  const handleAddEventType = async () => {
    if (!name.trim()) {
      alert("Event type name is required!");
      return;
    }

    try {
      const response = await API. addEventType({ name });
      if (response?.isSuccess) {
        fetchEventTypes();
        setName("");
      } else {
        console.error("Failed to add Event Type");
      }
    } catch (error) {
      console.error("Error adding Event Type:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await API.deleteEventType({ id });
      if (response?.isSuccess) {
        setEventTypes(prev => prev.filter(et => et._id !== id));
      } else {
        console.error("Failed to delete Event Type");
      }
    } catch (error) {
      console.error("Error deleting Event Type:", error);
    }
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Manage Event Types
      </Typography>

      <TextField
        label="Event Type Name"
        variant="outlined"
        fullWidth
        margin="dense"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddEventType}
        >
          Add Event Type
        </Button>
      </Box>

      <Table sx={{ marginTop: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell><strong>S.No.</strong></TableCell>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {eventTypes.length > 0 ? (
            eventTypes.map((et, index) => (
              <TableRow key={et._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{et.name}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(et._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">No Event Types found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageEventTypes;
