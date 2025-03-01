import React, { useEffect, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Typography, TextField, TableSortLabel
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
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Email</strong></TableCell>
            <TableCell><strong>Phone</strong></TableCell>
            <TableCell><strong>Role</strong></TableCell>
            <TableCell><strong>Message</strong></TableCell>
            <TableCell>
              <TableSortLabel
                active={true}
                direction={sortOrder}
                onClick={handleSort}
              >
                <strong>Time</strong>
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredQueries.length > 0 ? (
            filteredQueries.map((query, index) => (
              <TableRow key={index}>
                <TableCell>{query.firstName} {query.lastName}</TableCell>
                <TableCell>{query.email}</TableCell>
                <TableCell>{query.phone}</TableCell>
                <TableCell>{query.role}</TableCell>
                <TableCell>{query.message}</TableCell>
                <TableCell>{new Date(query.createdAt).toLocaleString()}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">No matching queries found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactQueries;
