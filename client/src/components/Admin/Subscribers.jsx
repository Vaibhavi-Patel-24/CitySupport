import React, { useEffect, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Typography, TextField, Button, Tooltip, CircularProgress
} from "@mui/material";
import { API } from "../../services/api"; 

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true); // 🔹 Added Loading State

  useEffect(() => {
    fetchSubscribers();
  }, []);

  // Fetch subscribers from API
  const fetchSubscribers = async () => {
    setLoading(true); // Start loading
    try {
      console.log("Fetching subscribers from API...");
      const response = await API.getSubscribers();
      console.log("API Response:", response);

      if (response.isSuccess) {
        setSubscribers(response.data);
      } else {
        console.error("API response failed:", response);
      }
    } catch (error) {
      console.error("Error fetching subscribers:", error);
    }
    setLoading(false); // Stop loading
  };

  // Handle Delete Subscriber
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this subscriber?")) return;
  
    try {
      console.log("Deleting subscriber with ID:", id);
      const response = await API.deleteSubscriber({ id });
      console.log("Delete Response:", response);
      if (response.isSuccess) {
        setSubscribers(prevSubscribers => prevSubscribers.filter(subscriber => subscriber._id !== id));
        console.log("Subscriber deleted successfully");
      } else {
        console.error("Failed to delete subscriber", response);
      }
    } catch (error) {
      console.error("Error deleting subscriber:", error);
    }
  };

  // Filter subscribers based on search input
  const filteredSubscribers = subscribers.filter(subscriber =>
    subscriber.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Subscribers List
      </Typography>

      {/* Search Bar */}
      <TextField
        label="Search by Email"
        variant="outlined"
        fullWidth
        margin="dense"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Show loading spinner while fetching */}
      {loading ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <CircularProgress /> {/* 🔥 Added Loading Spinner */}
        </div>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "10%" }}><strong>S.No.</strong></TableCell>
              <TableCell sx={{ width: "80%" }}><strong>Email</strong></TableCell>
              <TableCell sx={{ width: "10%" }}><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSubscribers.length > 0 ? (
              filteredSubscribers.map((subscriber, index) => (
                <TableRow key={subscriber._id}>
                  <TableCell>{index + 1}</TableCell>
                  {/* Tooltip for long email addresses */}
                  <TableCell>
                    <Tooltip title={subscriber.email}>
                      <span style={{
                        display: "inline-block",
                        maxWidth: "250px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}>
                        {subscriber.email}
                      </span>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="contained" 
                      color="error" 
                      onClick={() => handleDelete(subscriber._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  {search ? "No matching subscribers found" : "No subscribers available"}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default Subscribers;
