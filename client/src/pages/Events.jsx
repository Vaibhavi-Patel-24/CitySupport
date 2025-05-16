import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs';
import EventComponet from '../components/EventComponet';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import SearchEvents from '../components/SearchEvents';
import DaysEvents from './Days_Events';
import { API } from '../services/api';
import dayjs from "dayjs";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const calculateStringSimilarity = (str1, str2) => {
    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();

    const lengthToCompare = Math.ceil(lowerStr2.length * 0.5);

    const substring1 = lowerStr1.substring(0, lengthToCompare);
    const substring2 = lowerStr2.substring(0, lengthToCompare);

    let matchCount = 0;
    for (let i = 0; i < lengthToCompare; i++) {
      if (substring1[i] === substring2[i]) {
        matchCount++;
      }
    }

    return matchCount / lengthToCompare;
  };

  // Filter logic updated to include searchTerm filtering as well
  useEffect(() => {
    let filtered = [...events];

    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.owner.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    

    if (selectedEventType) {
      filtered = filtered.filter(event => {
        const eventTypeName = event.eventType || "";
        const similarity = calculateStringSimilarity(eventTypeName, selectedEventType);
        return similarity >= 0.5;
      });
    }

    if (selectedDate) {
      filtered = filtered.filter(event => {
        const eventDate = dayjs(event.date).format("YYYY-MM-DD");
        const selectedDateStr = dayjs(selectedDate).format("YYYY-MM-DD");
        return eventDate === selectedDateStr;
      });
    }

    setFilteredEvents(filtered);
  }, [searchTerm, selectedEventType, selectedDate, events]);

  const fetchEvents = async () => {
    try {
      const response = await API.getEvent();
      const backendEvents = response.data?.data || [];

      const formattedEvents = backendEvents.map(event => ({
        id: event._id,
        name: event.title,
        owner: event.author,
        like: event.likes || 0,
        img: event.image,
        date: event.date,
        eventType: event.eventType,
      }));

      // Sort events by date ascending
      formattedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

      setEvents(formattedEvents);
      setFilteredEvents(formattedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Handlers to update states from SearchEvents component
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleEventTypeChange = (selectedType) => {
    setSelectedEventType(selectedType);
  };

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  return (
    <div className="page-container">
      <Navbar />
      <GlobalBreadcrumbs />
      <div className="content">
        <SearchEvents 
          onSearchChange={handleSearchChange}
          onEventTypeChange={handleEventTypeChange} 
          onDateChange={handleDateChange} 
        />
        <Typography
          sx={{
            color: 'rgb(241,118,53)',
            fontWeight: "bold",
            fontSize: "22px",
            pl: { xs: 0, sm: 15 },
            pb: 3,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          Events
        </Typography>

        <Box sx={{ pl: { xs: 6, md: 14 }, pr: { xs: 6, md: 14 }, pb: { xs: 1, md: 7 }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              spacing={3}
              sx={{
                maxWidth: "1100px",
                justifyContent: "center",
                alignItems: "center",
                margin: '2 auto',
                px:5
              }}
            >
              {filteredEvents.map((event) => (
                <Grid item key={event.id} xs={12} sm={6} md={4} lg={4} sx={{ display: "flex", justifyContent: "center" }}>
                  <Box sx={{ width: "100%", maxWidth: 350 }}>
                    <EventComponet event={event} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <DaysEvents />
      </div>
      <Footer />
    </div>
  );
};

export default Events;

