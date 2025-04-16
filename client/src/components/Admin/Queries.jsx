import React, { useEffect, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Typography, TextField, TableSortLabel, Button, Tooltip
} from "@mui/material";
import { API } from "../../services/api"; 

const ContactQueries = () => {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    fetchQueries();
  }, []);

  // Fetch queries from API
  const fetchQueries = async () => {
    try {
      console.log("Fetching queries from API..."); 
      const response = await API.getQueries();
      console.log("API Response:", response); 

      if (response.isSuccess) {
        const sortedData = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setQueries(sortedData);
      } else {
        console.error("API response failed:", response);
      }
    } catch (error) {
      console.error("Error fetching queries:", error);
    }
  };

  // Handle Delete Query
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this query?")) return;

    try {
        const response = await API.deleteQuery({id}); 
        if (response.isSuccess) {
            setQueries(prevQueries => prevQueries.filter(query => query._id !== id));
            console.log("Query deleted successfully");
        } else {
            console.error("Failed to delete query");
        }
    } catch (error) {
        console.error("Error deleting query:", error);
    }
  };

  // Function to handle sorting toggle
  const handleSort = () => {
    const sorted = [...queries].sort((a, b) => {
      return sortOrder === "asc"
        ? new Date(a.createdAt) - new Date(b.createdAt)
        : new Date(b.createdAt) - new Date(a.createdAt);
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setQueries(sorted);
  };

  // Filter queries based on search input
  const filteredQueries = queries.filter(query =>
    query.firstName.toLowerCase().includes(search.toLowerCase()) ||
    query.lastName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Contact Queries
      </Typography>

      {/* Search Bar */}
      <TextField
        label="Search by Name"
        variant="outlined"
        fullWidth
        margin="dense"
        onChange={(e) => setSearch(e.target.value)}
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "5%" }}><strong>S.No.</strong></TableCell>
            <TableCell sx={{ width: "15%" }}><strong>Name</strong></TableCell>
            <TableCell sx={{ width: "20%" }}><strong>Email</strong></TableCell>
            <TableCell sx={{ width: "10%" }}><strong>Phone</strong></TableCell>
            <TableCell sx={{ width: "10%" }}><strong>Role</strong></TableCell>
            <TableCell sx={{ width: "25%" }}><strong>Message</strong></TableCell>
            <TableCell sx={{ width: "10%" }}>
              <TableSortLabel
                active={true}
                direction={sortOrder}
                onClick={handleSort}
              >
                <strong>Time</strong>
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ width: "5%" }}><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredQueries.length > 0 ? (
            filteredQueries.map((query, index) => (
              <TableRow key={query._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{query.firstName} {query.lastName}</TableCell>
                <TableCell>{query.email}</TableCell>
                <TableCell>{query.phone}</TableCell>
                <TableCell>{query.role}</TableCell>
                {/* Limit message length with tooltip */}
                <TableCell>
                  <Tooltip title={query.message}         
                  sx={{}}>
                    <span style={{
                      display: "inline-block",
                      maxWidth: "200px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }}>
                      {query.message}
                    </span>
                  </Tooltip>
                </TableCell>
                <TableCell>{new Date(query.createdAt).toLocaleString()}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    color="error" 
                    onClick={() => handleDelete(query._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} align="center">No matching queries found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactQueries;
