import React, { useEffect, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Typography, TextField, Button, Box, Grid
} from "@mui/material";
import { API } from "../../services/api";

const AdminBusiness = () => {
  const [businesses, setBusinesses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const fetchBusinesses = async () => {
    try {
      const response = await API.getBusinesses();
      if (response.isSuccess) {
        setBusinesses(response.data);
      } else {
        console.error("Failed to fetch businesses");
      }
    } catch (error) {
      console.error("Error fetching businesses:", error);
    }
  };

  const handleEditClick = (business) => {
    setEditingId(business._id);
    setEditData({ ...business });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = async (id) => {
    try {
      const response = await API.updateBusiness(id, editData);
      if (response.isSuccess) {
        fetchBusinesses();
        setEditingId(null);
        setEditData({});
      } else {
        console.error("Failed to update business");
      }
    } catch (error) {
      console.error("Error updating business:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this business?")) return;
    try {
      const response = await API.deleteBusiness(id);
      if (response.isSuccess) {
        setBusinesses(prev => prev.filter(b => b._id !== id));
      } else {
        console.error("Failed to delete business");
      }
    } catch (error) {
      console.error("Error deleting business:", error);
    }
  };

  return (
    <Box sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>Manage Registered Businesses</Typography>

      <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {["Business Owner", "Business Name", "Contact Number", "Email", "Address",
                "GST No.", "Aadhaar No.", "Business Category", "Product Category", "Product Name",
                "Price", "Stock", "Description", "Actions"].map(header => (
                  <TableCell key={header}>{header}</TableCell>
                ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {businesses.length === 0 ? (
              <TableRow>
                <TableCell colSpan={14} align="center">No registered businesses found.</TableCell>
              </TableRow>
            ) : (
              businesses.map(biz => (
                editingId === biz._id ? (
                  <TableRow key={biz._id}>
                    <TableCell colSpan={14}>
                      <Paper sx={{ p: 2 }}>
                        <Grid container spacing={2}>
                          {[
                            { label: "Owner First Name", name: "ownerFirstName" },
                            { label: "Owner Last Name", name: "ownerLastName" },
                            { label: "Business Name", name: "businessName" },
                            { label: "Contact Number", name: "contactNumber" },
                            { label: "Email", name: "email" },
                            { label: "Address Line 1", name: "addressLine1" },
                            { label: "Address Line 2", name: "addressLine2" },
                            { label: "City", name: "city" },
                            { label: "State", name: "state" },
                            { label: "Postal Code", name: "postalCode" },
                            { label: "GST No.", name: "gstNumber" },
                            { label: "Aadhaar No.", name: "aadhaarNumber" },
                            { label: "Business Category", name: "businessCategory" },
                            { label: "Product Category", name: "productCategory" },
                            { label: "Product Name", name: "productName" },
                            { label: "Price", name: "price", type: "number" },
                            { label: "Stock", name: "stockAvailability", type: "number" },
                            { label: "Description", name: "description", multiline: true }
                          ].map(({ label, name, type, multiline }) => (
                            <React.Fragment key={name}>
                              <Grid item xs={12} sm={3}><Typography>{label}</Typography></Grid>
                              <Grid item xs={12} sm={9}>
                                <TextField
                                  name={name}
                                  value={editData[name] || ""}
                                  onChange={handleInputChange}
                                  size="small"
                                  fullWidth
                                  type={type || "text"}
                                  multiline={multiline || false}
                                  rows={multiline ? 3 : 1}
                                />
                              </Grid>
                            </React.Fragment>
                          ))}

                          <Grid item xs={12}>
                            <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
                              <Button variant="contained" color="success" onClick={() => handleSaveEdit(biz._id)}>Save</Button>
                              <Button variant="outlined" onClick={handleCancelEdit}>Cancel</Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </Paper>
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow key={biz._id}>
                    <TableCell>{`${biz.ownerFirstName} ${biz.ownerLastName}`}</TableCell>
                    <TableCell>{biz.businessName}</TableCell>
                    <TableCell>{biz.contactNumber}</TableCell>
                    <TableCell>{biz.email}</TableCell>
                    <TableCell>
                      {biz.addressLine1}<br />
                      {biz.addressLine2 && <>{biz.addressLine2}<br /></>}
                      {biz.city}, {biz.state} {biz.postalCode}
                    </TableCell>
                    <TableCell>{biz.gstNumber}</TableCell>
                    <TableCell>{biz.aadhaarNumber}</TableCell>
                    <TableCell>{biz.businessCategory}</TableCell>
                    <TableCell>{biz.productCategory}</TableCell>
                    <TableCell>{biz.productName}</TableCell>
                    <TableCell>{biz.price}</TableCell>
                    <TableCell>{biz.stockAvailability}</TableCell>
                    <TableCell>{biz.description}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Button variant="contained" color="primary" onClick={() => handleEditClick(biz)}>Edit</Button>
                        <Button variant="contained" color="error" onClick={() => handleDelete(biz._id)}>Delete</Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                )
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminBusiness;
