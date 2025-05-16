
import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  InputAdornment,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { API } from "../services/api";

const SearchEvents = ({ onSearchChange, onEventTypeChange, onDateChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [eventType, setEventType] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTypes, setEventTypes] = useState([]);

  useEffect(() => {
    fetchEventTypes();
  }, []);

  const fetchEventTypes = async () => {
    try {
      const response = await API.getEventTypes();
      if (response.isSuccess) {
        setEventTypes(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching event types:", error);
    }
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearchChange(term);
  };

  const handleEventTypeChange = (event) => {
    const selectedType = event.target.value;
    setEventType(selectedType);
    onEventTypeChange(selectedType);
  };

  const handleDateChange = (newValue) => {
    if (newValue && newValue.isValid()) {
      setSelectedDate(newValue);
      onDateChange(newValue.toISOString());
    } else {
      setSelectedDate(null);
      onDateChange(null);
    }
  };
  

  return (
    <Box>
      <Typography
        sx={{
          color: "rgb(241,118,53)",
          fontWeight: "bold",
          fontSize: "22px",
          pl: { xs: 0, sm: 15 },
          pb: 3,
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        Search for Events
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          pl: 5,
          pr: 5,
          pb: 5,
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* Search Input */}
        <TextField
          variant="outlined"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ width: { xs: "100%", sm: "30%" } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />

        {/* Event Type Select */}
        <FormControl sx={{ width: { xs: "100%", sm: "30%" } }}>
          <InputLabel id="event-type-label">Event Type</InputLabel>
          <Select
            labelId="event-type-label"
            id="event-type-select"
            value={eventType}
            label="Event Type"
            onChange={handleEventTypeChange}
          >
            <MenuItem value="">All</MenuItem>
            {eventTypes.map((et) => (
              <MenuItem key={et._id} value={et.name}>
                {et.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Date Picker */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => (
              <TextField {...params} sx={{ width: { xs: "100%", sm: "30%" } }} />
            )}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default SearchEvents;
