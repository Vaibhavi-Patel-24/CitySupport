import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { API } from '../../services/api';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const Subscribers = () => {

  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await API.getSubscribers();
        console.log(response.data); // Check what API is returning
        
        if (Array.isArray(response.data)) {
          setSubscribers(response.data);
        } else {
          setSubscribers([]); // Fallback if response is not an array
        }
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      }
    };
  
    fetchSubscribers();
  }, []);
  

  return (
    <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ width: "12%",pl:5}}>Sr. No.</StyledTableCell>
            <StyledTableCell  sx={{ width: "88%" }}>Email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribers.map((subscriber, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell sx={{ width: "12%",pl:5}}>{index + 1}</StyledTableCell>
              <StyledTableCell sx={{ width: "88%" }}>{subscriber.email}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Subscribers
