import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs'
import { Link } from 'react-router-dom'
import { Box, Grid2, Typography } from '@mui/material'
import hospitals from '../images/hospitals.png'
import schools from '../images/schools.png'
import colleges from '../images/colleges.png'
import electricity from '../images/electricity.png'
import banks from '../images/banks.png'
import postals from '../images/postals.png'
import municipal_corporation from '../images/municipal_corporation.png'
import ngos from '../images/ngos.png'
const Utility = () => {

  const Items = [
    {id:1,name:'Hospitals',image:hospitals, path: '/utility/Hospitals'},
    {id:2,name:'Municipal Corporation ',image:municipal_corporation,path: '/utility/Municipal'},
    {id:3,name:'Electricity',image:electricity,path:'/utility/Electricity'},
    {id:4,name:'Bancks',image:banks,path: '/utility/Banks'},
    {id:5,name:'Schools',image:schools,path:'/utility/Schools'},
    {id:6,name:'Colleges',image:colleges,path: '/utility/Colleges'},
    {id:7,name:'NGOs',image:ngos,path: '/utility/Ngos'},
    {id:8,name:'Postals',image:postals, path: '/utility/Postals'}
  ]

  return (
    <Box className="page-container">
      <Navbar/>
      <GlobalBreadcrumbs/>
        <Box>

        <Typography sx={{color:'rgb(241,118,53)',fontSize:"20px",fontWeight:'bold',marginX:{xs:'auto',md:'50px'}}}>Public Utilities</Typography>
        
        <Box sx={{marginX:{xs:'auto',md:'50px'},pt:{xs:1,md:7},pb:{xs:1,md:7},display:'flex',alignItems:'center',justifyContent:'center'}}>
          
        <Box>
          <Grid2 container spacing={{ xs: 2, md: 5}} columns={{ xs: 4, sm: 8, md: 16 }} justifyContent="center">
            {Items.map((value, index) => (
              <Grid2 key={index}  size={{ xs: 3, sm: 4, md: 4 }} display="flex" flexDirection="column" alignItems="center" sx={{"&:hover":{backgroundColor:'rgb(217,217,217)',color:'rgb(241,118,53)',cursor:"pointer"},p:2}}>
              <Link to={value.path} style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}>
                <img src={value.image} alt={value.name} width='40%' />
                <Typography sx={{pt:1}}>{value.name}</Typography>
              </Link>
              </Grid2>
            ))}
          </Grid2>
        </Box>
        </Box>     
        </Box>
      <Footer/>
    </Box>
  )
}

export default Utility
