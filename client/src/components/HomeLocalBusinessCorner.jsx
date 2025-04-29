import React, { useState, useEffect } from "react";
import { styled, Box, Typography, Button, CircularProgress } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import { API } from "../services/api"; 

const MainContainer = styled(Box)({
    height: 'auto',
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
});

const Card = styled(Box)({
    width: '90%',
    margin: '20px 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F3F5F6',
    flex: 1,
    "@media (min-width: 900px)": {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
});

const TextBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px',
    "@media (min-width: 900px)": {
        flex: 1,
    },
});

const SubTextBox1 = styled(Box)({
    marginBottom: '20px',
});

const SubTextBox2 = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    "@media (min-width: 900px)": {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
});

const DateTextBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    maxWidth: '300px',
    "@media (min-width: 900px)": {
        flex: 1,
        margin: '0px 20px'
    },
});

const AddressTextBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    maxWidth: '300px',
    "@media (min-width: 900px)": {
        flex: 1,
        margin: '0px 20px'
    },
});

const AdressIcon = styled(PlaceIcon)({
    color: '#E7E5ED',
    fontSize: '50px'
});

const DateIcon = styled(CalendarMonthIcon)({
    color: '#E7E5ED',
    fontSize: '50px'
});

const ViewAllButton = styled(Button)({
    backgroundColor: '#2196F3',
    color: 'white',
    padding: '8px 24px',
    borderRadius: '4px',
    marginTop: '20px',
    '&:hover': {
        backgroundColor: '#1976D2',
    },
});

const LoadingContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    width: '100%'
});

const LocalBusinessCorner = () => {
    const [businesses, setBusinesses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleCount, setVisibleCount] = useState(3); // Show first 3 businesses initially
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        fetchBusinessData();
    }, []);

    const fetchBusinessData = async () => {
        setLoading(true);
        try {
            // Replace with your actual API endpoint
            console.log(`invoking get function`)
            const response = await API.getHomeBussinesses();
            console.log(response)
            console.log(response.data.data.name)
            
            // Assuming your API returns data in the format { data: [...businesses] }
            const fetchedBusinesses = response.data?.data || [];
            setBusinesses(fetchedBusinesses);
            setTotalCount(fetchedBusinesses.length);
            setLoading(false);            
        } catch (err) {
            console.error("Failed to fetch business data:", err);
            setError("Failed to load business data. Please try again later.");
            setLoading(false);
        }
    };

    const handleViewAll = () => {
        // Show all businesses when View All is clicked
        setVisibleCount(totalCount);
    };

    if (loading) {
        return (
            <LoadingContainer>
                <CircularProgress />
            </LoadingContainer>
        );
    }

    if (error) {
        return (
            <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography color="error">{error}</Typography>
                <Button 
                    variant="contained" 
                    sx={{ mt: 2 }}
                    onClick={() => fetchBusinessData()}
                >
                    Try Again
                </Button>
            </Box>
        );
    }

    return (
        <Box sx={{ py: 4 }}>
            <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
                Local Business Corner
            </Typography>
            
            <MainContainer>
                {businesses.slice(0, visibleCount).map((business, index) => (
                    <Card key={business._id || index} sx={{ flexDirection: index % 2 !== 0 ? 'row-reverse' : 'row' }}>
                        <TextBox>
                            <SubTextBox1>
                                <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                                    {business.name || "[NAME]"}
                                </Typography>
                                <Typography variant="body1" style={{ color: '#3C3C43' }}>
                                    {business.description || "[ABOUT BUSINESS]"}
                                </Typography>
                            </SubTextBox1>
                            <SubTextBox2>
                                <DateTextBox>
                                    <DateIcon />
                                    <Typography style={{ fontWeight: 'bold' }}>
                                        {business.date} {business.month}
                                    </Typography>
                                    <Typography style={{ fontWeight: 'bold' }}>
                                        {business.time || "[TIMINGS]"}
                                    </Typography>
                                    <Typography style={{ color: '#3C3C43' }}>
                                        {business.smallDesc || ""}
                                    </Typography>
                                </DateTextBox>
                                <AddressTextBox>
                                    <AdressIcon />
                                    <Typography style={{ fontWeight: 'bold' }}>Location</Typography>
                                    <Typography style={{ color: '#3C3C43' }}>
                                        {business.venue || "[LOCATION]"}
                                    </Typography>
                                </AddressTextBox>
                            </SubTextBox2>
                        </TextBox>
                        <Box sx={{ p: 2, maxWidth: { xs: '100%', md: '40%' } }}>
                            <img 
                                src={business.imageURL} 
                                alt={business.name || "Business"} 
                                style={{ 
                                    maxWidth: '100%', 
                                    borderRadius: '10px', 
                                    maxHeight: "400px",
                                    objectFit: "cover"
                                }} 
                            />
                        </Box>
                    </Card>
                ))}
                
                {visibleCount < totalCount && (
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <ViewAllButton onClick={handleViewAll}>
                            View All
                        </ViewAllButton>
                    </Box>
                )}
            </MainContainer>
        </Box>
    );
};

export default LocalBusinessCorner;