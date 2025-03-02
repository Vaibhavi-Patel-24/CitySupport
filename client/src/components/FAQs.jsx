import React, { useState, useEffect } from "react";
import { API } from "../services/api"; 
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Typography,
  Container,
  Box,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from '../images/search-magnify-magnifier-glass_svgrepo.com.png';

const Image = styled("img")({
  height: 50,
  margin: "auto",
  display: "flex",
  padding: "5px 0 0",
});

const ClientFAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState(null); // State for open accordion

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await API.getFAQs();
        if (response && response.isSuccess) {
          setFaqs(response.data);
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };
    fetchFAQs();
  }, []);

  const filteredFaqs = faqs.filter((faq) =>
    faq.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAccordionChange = (faqId) => (_, isExpanded) => {
    setExpanded(isExpanded ? faqId : null); // Allow only one open at a time
    
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        sx={{ color: "#FF6600", fontWeight: "bold", mb: 2 }}
      >
        ~ FAQs
      </Typography>
      <Box sx={{ backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '10px' }}>
        {/* Search Bar */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Image src={SearchIcon} />
          <TextField
            fullWidth
            variant="outlined"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "2px",
                borderColor: "#FF6600",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#FF6600", // Correct placeholder color
                opacity: 1,
              },
              "& fieldset": {
                border: "none",
                borderBottom: "2px dashed #3399FF", // Dashed blue underline
              },
              "&:hover fieldset": {
                borderBottom: "2px dashed #3399FF",
              },
              "&.Mui-focused fieldset": {
                borderBottom: "2px dashed #3399FF",
              },
            }}
            InputProps={{
              sx: {
                color: "#000",
              },
            }}
          />
        </Box>

        {/* FAQ List */}
        <Box sx={{ background: "#ececec", p: 2, borderRadius: "10px" }}>
          {filteredFaqs.map((faq) => (
            <Accordion
              key={faq._id}
              expanded={expanded === faq._id}
              onChange={handleAccordionChange(faq._id)}
              sx={{ mb: 0.5, boxShadow:'1',  borderRadius:'10px' }}
            >
              <AccordionSummary
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: expanded===faq._id ? "#FF6600" : "#",
                  backgroundColor:expanded===faq._id ? "#CAF5F5" : "#"
                }}
              >
                {/* Dynamic Expand/Collapse Icon */}
                <ExpandMoreIcon
                  sx={{
                    color: "#FF6600",
                    transform: expanded === faq._id ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
                <Typography sx={{ fontWeight: "bold" }}>{faq.title}</Typography>
              </AccordionSummary>

              <AccordionDetails
              
              >
                <Typography >{faq.description}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ClientFAQs;
