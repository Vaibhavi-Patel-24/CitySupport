import React, { useEffect, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Typography, TextField, Button, Box, Grid, Dialog, DialogTitle,
  DialogContent, DialogActions, Tabs, Tab, IconButton, Card, CardContent,
  Chip, Divider, InputAdornment, CircularProgress, Snackbar, Alert,
  TablePagination
} from "@mui/material";
import { 
  Edit as EditIcon, 
  Delete as DeleteIcon,
  Search as SearchIcon,
  Visibility as ViewIcon,
  AddCircle as AddIcon,
  Close as CloseIcon
} from "@mui/icons-material";
import { API } from "../../services/api";

const AdminBusiness = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [editData, setEditData] = useState({});
  const [dialogMode, setDialogMode] = useState("view"); // "view" or "edit"
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [notification, setNotification] = useState({ open: false, message: "", severity: "success" });
  
  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const fetchBusinesses = async () => {
    setLoading(true);
    try {
      const response = await API.getBusinesses();
      if (response.isSuccess) {
        setBusinesses(response.data);
      } else {
        showNotification("Failed to fetch businesses", "error");
      }
    } catch (error) {
      console.error("Error fetching businesses:", error);
      showNotification("Error fetching businesses", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleViewBusiness = (business) => {
    setSelectedBusiness(business);
    setDialogMode("view");
    setOpenDialog(true);
  };

  const handleEditBusiness = (business) => {
    setSelectedBusiness(business);
    setEditData({ ...business });
    setDialogMode("edit");
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedBusiness(null);
    setEditData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = async () => {
    try {
      setLoading(true);
      const response = await API.updateBusiness(selectedBusiness._id, editData);
      if (response.isSuccess) {
        await fetchBusinesses();
        handleCloseDialog();
        showNotification("Business updated successfully", "success");
      } else {
        showNotification("Failed to update business", "error");
      }
    } catch (error) {
      console.error("Error updating business:", error);
      showNotification("Error updating business", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this business?")) return;
    try {
      setLoading(true);
      const response = await API.deleteBusiness(id);
      if (response.isSuccess) {
        setBusinesses(prev => prev.filter(b => b._id !== id));
        showNotification("Business deleted successfully", "success");
      } else {
        showNotification("Failed to delete business", "error");
      }
    } catch (error) {
      console.error("Error deleting business:", error);
      showNotification("Error deleting business", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(0); // Reset to first page when searching
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const showNotification = (message, severity) => {
    setNotification({ open: true, message, severity });
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  // Filter businesses based on search term
  const filteredBusinesses = businesses.filter(business => {
    const searchLower = searchTerm.toLowerCase();
    return (
      business.businessName?.toLowerCase().includes(searchLower) ||
      business.ownerFirstName?.toLowerCase().includes(searchLower) ||
      business.ownerLastName?.toLowerCase().includes(searchLower) ||
      business.email?.toLowerCase().includes(searchLower) ||
      business.businessCategory?.toLowerCase().includes(searchLower) ||
      business.productName?.toLowerCase().includes(searchLower)
    );
  });

  // Paginate the filtered results
  const paginatedBusinesses = filteredBusinesses.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h5" component="h1" fontWeight="bold">
          Manage Businesses
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<AddIcon />}
          onClick={() => {/* Navigate to add business page */}}
        >
          Add Business
        </Button>
      </Box>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <TextField
            fullWidth
            placeholder="Search by business name, owner, email, category or product"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchTerm && (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={() => setSearchTerm("")}>
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
            size="small"
          />
        </CardContent>
      </Card>

      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          {loading && businesses.length === 0 ? (
            <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Table sx={{ minWidth: 750 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Business Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Owner</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Product Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Stock</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedBusinesses.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} align="center">
                      {searchTerm ? "No matching businesses found." : "No registered businesses found."}
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedBusinesses.map(business => (
                    <TableRow key={business._id} hover>
                      <TableCell>{business.businessName}</TableCell>
                      <TableCell>{`${business.ownerFirstName || ''} ${business.ownerLastName || ''}`}</TableCell>
                      <TableCell>{business.businessCategory}</TableCell>
                      <TableCell>{business.productName}</TableCell>
                      <TableCell>₹{business.price}</TableCell>
                      <TableCell>{business.stockAvailability}</TableCell>
                      <TableCell>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <IconButton 
                            size="small"
                            color="primary"
                            onClick={() => handleViewBusiness(business)}
                          >
                            <ViewIcon />
                          </IconButton>
                          <IconButton 
                            size="small"
                            color="secondary"
                            onClick={() => handleEditBusiness(business)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton 
                            size="small"
                            color="error"
                            onClick={() => handleDelete(business._id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredBusinesses.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* Business Details Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle sx={{ bgcolor: dialogMode === "edit" ? "#f5f5f5" : "primary.main", color: dialogMode === "edit" ? "text.primary" : "white" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6">
              {dialogMode === "view" ? "Business Details" : "Edit Business"}
            </Typography>
            <IconButton onClick={handleCloseDialog} sx={{ color: dialogMode === "edit" ? "inherit" : "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent dividers>
          <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 2 }}>
            <Tab label="Business Info" />
            <Tab label="Owner Details" />
            <Tab label="Product Details" />
          </Tabs>

          {/* Business Info Tab */}
          {activeTab === 0 && (
            <Grid container spacing={2}>
              <InfoField 
                label="Business Name" 
                value={selectedBusiness?.businessName} 
                name="businessName"
                editMode={dialogMode === "edit"}
                editData={editData}
                handleInputChange={handleInputChange}
              />
              <InfoField 
                label="Business Category" 
                value={selectedBusiness?.businessCategory} 
                name="businessCategory"
                editMode={dialogMode === "edit"}
                editData={editData}
                handleInputChange={handleInputChange}
              />
              <InfoField 
                label="GST Number" 
                value={selectedBusiness?.gstNumber} 
                name="gstNumber"
                editMode={dialogMode === "edit"}
                editData={editData}
                handleInputChange={handleInputChange}
              />
              <InfoField 
                label="Contact Number" 
                value={selectedBusiness?.contactNumber} 
                name="contactNumber"
                editMode={dialogMode === "edit"}
                editData={editData}
                handleInputChange={handleInputChange}
              />
              <InfoField 
                label="Email" 
                value={selectedBusiness?.email} 
                name="email"
                editMode={dialogMode === "edit"}
                editData={editData}
                handleInputChange={handleInputChange}
              />
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="text.secondary">Address</Typography>
                {dialogMode === "edit" ? (
                  <>
                    <TextField
                      fullWidth
                      margin="dense"
                      label="Address Line 1"
                      name="addressLine1"
                      value={editData?.addressLine1 || ""}
                      onChange={handleInputChange}
                      size="small"
                      sx={{ mb: 1 }}
                    />
                    <TextField
                      fullWidth
                      margin="dense"
                      label="Address Line 2"
                      name="addressLine2"
                      value={editData?.addressLine2 || ""}
                      onChange={handleInputChange}
                      size="small"
                      sx={{ mb: 1 }}
                    />
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <TextField
                          fullWidth
                          label="City"
                          name="city"
                          value={editData?.city || ""}
                          onChange={handleInputChange}
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          fullWidth
                          label="State"
                          name="state"
                          value={editData?.state || ""}
                          onChange={handleInputChange}
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          fullWidth
                          label="Postal Code"
                          name="postalCode"
                          value={editData?.postalCode || ""}
                          onChange={handleInputChange}
                          size="small"
                        />
                      </Grid>
                    </Grid>
                  </>
                ) : (
                  <Typography variant="body1">
                    {selectedBusiness?.addressLine1}<br />
                    {selectedBusiness?.addressLine2 && <>{selectedBusiness?.addressLine2}<br /></>}
                    {selectedBusiness?.city}, {selectedBusiness?.state} {selectedBusiness?.postalCode}
                  </Typography>
                )}
              </Grid>
            </Grid>
          )}

          {/* Owner Details Tab */}
          {activeTab === 1 && (
            <Grid container spacing={2}>
              <InfoField 
                label="First Name" 
                value={selectedBusiness?.ownerFirstName} 
                name="ownerFirstName"
                editMode={dialogMode === "edit"}
                editData={editData}
                handleInputChange={handleInputChange}
              />
              <InfoField 
                label="Last Name" 
                value={selectedBusiness?.ownerLastName} 
                name="ownerLastName"
                editMode={dialogMode === "edit"}
                editData={editData}
                handleInputChange={handleInputChange}
              />
              <InfoField 
                label="Aadhaar Number" 
                value={selectedBusiness?.aadhaarNumber} 
                name="aadhaarNumber"
                editMode={dialogMode === "edit"}
                editData={editData}
                handleInputChange={handleInputChange}
              />
            </Grid>
          )}

          {/* Product Details Tab */}
          {activeTab === 2 && (
            <Grid container spacing={2}>
              <InfoField 
                label="Product Category" 
                value={selectedBusiness?.productCategory} 
                name="productCategory"
                editMode={dialogMode === "edit"}
                editData={editData}
                handleInputChange={handleInputChange}
              />
              <InfoField 
                label="Product Name" 
                value={selectedBusiness?.productName} 
                name="productName"
                editMode={dialogMode === "edit"}
                editData={editData}
                handleInputChange={handleInputChange}
              />
              <InfoField 
                label="Price" 
                value={selectedBusiness?.price} 
                name="price"
                editMode={dialogMode === "edit"}
                editData={editData}
                handleInputChange={handleInputChange}
                type="number"
                startAdornment="₹"
              />
              <InfoField 
                label="Stock Availability" 
                value={selectedBusiness?.stockAvailability} 
                name="stockAvailability"
                editMode={dialogMode === "edit"}
                editData={editData}
                handleInputChange={handleInputChange}
                type="number"
              />
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="text.secondary">Description</Typography>
                {dialogMode === "edit" ? (
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name="description"
                    value={editData?.description || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  <Typography variant="body1">
                    {selectedBusiness?.description || "No description provided."}
                  </Typography>
                )}
              </Grid>
            </Grid>
          )}
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          {dialogMode === "view" ? (
            <>
              <Button onClick={() => handleEditBusiness(selectedBusiness)} color="primary" startIcon={<EditIcon />}>
                Edit
              </Button>
              <Button onClick={handleCloseDialog} color="inherit">Close</Button>
            </>
          ) : (
            <>
              <Button onClick={handleSaveEdit} color="primary" variant="contained" disabled={loading}>
                {loading ? <CircularProgress size={24} /> : "Save Changes"}
              </Button>
              <Button onClick={handleCloseDialog} color="inherit">Cancel</Button>
            </>
          )}
        </DialogActions>
      </Dialog>

      {/* Notification Snackbar */}
      <Snackbar 
        open={notification.open} 
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity}
          variant="filled"
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

// Helper component for displaying info fields
const InfoField = ({ 
  label, 
  value, 
  name, 
  editMode, 
  editData, 
  handleInputChange, 
  type = "text",
  startAdornment = null,
  multiline = false,
  rows = 1
}) => {
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="subtitle2" color="text.secondary">{label}</Typography>
      {editMode ? (
        <TextField
          fullWidth
          name={name}
          value={editData[name] || ""}
          onChange={handleInputChange}
          size="small"
          type={type}
          multiline={multiline}
          rows={rows}
          InputProps={startAdornment ? {
            startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>,
          } : undefined}
        />
      ) : (
        <Typography variant="body1">
          {startAdornment && startAdornment}{value || "Not provided"}
        </Typography>
      )}
    </Grid>
  );
};

export default AdminBusiness;