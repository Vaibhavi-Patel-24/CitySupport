import React from 'react'
import {Breadcrumbs, Typography,Box} from "@mui/material"
import  { Link ,useLocation } from 'react-router-dom'

const GlobalBreadcrumbs = () => {
    const location = useLocation();
    const pathname = location.pathname.split('/').filter((x)=>x);
  return (
    <>
    <Box sx={{marginX: { xs: 2, md: "50px" },pt:{md:2,xs:1},pb:{md:2,xs:1}}}>
        <Breadcrumbs separator=">" sx={{color:'rgb(241,118,53)'}}>
            <Link to='/' style={{color:'rgb(241,118,53)',textDecoration:"none"}}>
                Home
            </Link>
            {
                pathname.map((value,index)=>{
                    const to = `/${pathname.slice(0,index+1).join("/")}`;
                    const isLast = index === pathname.length - 1;

                    return isLast?(
                        <Typography key={to} color='rgb(73,143,191)'>
                            {value}
                        </Typography>
                    ):
                    (<Link to={to} key={to} style={{textDecoration:"none",color:'rgb(241,118,53)'}}>
                        {value}
                    </Link>)
                })
            }
            
        </Breadcrumbs> 
    </Box>
    </>
  )
}

export default GlobalBreadcrumbs
