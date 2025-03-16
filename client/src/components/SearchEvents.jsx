import React, { useState } from "react";
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
import dayjs from "dayjs"

const SearchEvents = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [eventType, setEventType] = useState('');
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleChange = (event) => {
    setEventType(event.target.value);
  };
  return (
    <>
    <Box>
        <Typography sx={{color:'rgb(241,118,53)',fontWeight:"bold",fontSize:"22px",pl:15,pb:3}}>Search for Events</Typography>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center", pl: 5, pr: 5, pb: 5, justifyContent:'center' }}>

        <TextField
        variant="outlined"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{width:"30%"}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          }}/>

        <FormControl sx={{width:"30%"}}>
        <InputLabel id="demo-simple-select-label">Event Type</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={eventType}
            label="Select Event Type"
            onChange={handleChange}
        >
            <MenuItem value={10}>Social events</MenuItem>
            <MenuItem value={20}>Educational evets</MenuItem>
            <MenuItem value={30}>Music events</MenuItem>
        </Select>
        </FormControl>

        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderInput={(params) => <TextField {...params} />}
                sx={{ width: "30%" }}
            />
        </LocalizationProvider>

            
      
        </Box>
    </Box>
      
    </>
  )
}

export default SearchEvents
