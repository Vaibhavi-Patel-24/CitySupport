// admin login page
import React, { useState } from "react";

import {Box, TextField , Button , styled , Typography,} from '@mui/material';
import { useNavigate } from "react-router-dom";

import logo from "../../images/CITY SUPPORT main logo.png"
import ErrorIcon from "@mui/icons-material/Error";
import { API } from "../../services/api.js";


const Component = styled(Box)`
    width   : 400px;
    height : auto;
    margin  : auto;
    margin-top: 150px;
    border-radius : 15.5px;
    box-shadow: 1.5px 1px 10.5px 1px rgb(0 0 0 / 0.2);
`;

const Image = styled('img')({
    width : 200,
    margin : 'auto',
    display : 'flex',
    padding : '50px 0 0'
});

const Wrapper = styled(Box)`
    
    padding : 25px 35px;
    display: flex;
    flex : 1;
    flex-direction : column;
    & > TextField , & > Button , & > p{
        margin-top : 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform : none;
    backgroud : #F26522;
`;

export default function AdminLogin  ({ isUserAuthenticated }) {

    const imageUrl = logo;

    const [errors, setErrors] = useState([]);
    
    const navigate = useNavigate();

    const [detail , setDetail] = useState({
        admin:"",
        password:""
    })

    const validateUsername = () => {
        if (detail.admin.trim() === "") return "Username is required.";
        if (detail.admin.length < 3) return "Username must be at least 3 characters.";
        return null;
      };
    
      const validatePassword = () => {
        if (detail.password.trim() === "") return "Password is required.";
        if (detail.password.length < 6) return "Password must be at least 6 characters.";
        return null;
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetail((prevDetail) => ({
          ...prevDetail,
          [name]: value
        }));
      };

      const handleLogin = async (event) => {
        event.preventDefault();
        const validationErrors = [];
        const usernameError = validateUsername();
        const passwordError = validatePassword();
    
        if (usernameError) validationErrors.push(usernameError);
        if (passwordError) validationErrors.push(passwordError);
        
    
        if (validationErrors.length > 0) {
          setErrors(validationErrors);
        } else {
          setErrors([]);
        };
        
        try {
            console.log(detail)
            console.log(`calling api from frontend`)
            const response = await API.adminLogin({
              admin: detail.admin,
              password: detail.password,
            });
    
            if (response && response.isSuccess) {
                console.log(`got response from backend with success`)
              console.log(response)
              sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`)
              sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`)
              isUserAuthenticated(true);
              navigate('/admin123')
              
            } else if (response && response.isError) {
                console.log(`got response from backend with error`)
              setErrors(["Something went wrong. Please try again!"]);
            } else {
                console.log(`got response from backend without success nor failure`)
              setErrors(["Unexpected response format from server."]);
            }
          } catch (error) {
            setErrors(["Something went wrong. Please check internet and try again!"]);
            console.error("Error during login:", error);
          }
    }

    return(
        <Component>
            <Box>
                <Image src = {imageUrl} alt="Login" />
               
                 <Wrapper>
                    
                    <TextField variant='standard' name="admin" label='Username' onChange={handleChange}/>
                    <TextField variant='standard' name="password" label='Password' onChange={handleChange}/>
                    {errors.length > 0 && (
                        <div
                        style={{
                            color: "white",
                            background: "#FF7F7F",
                            marginBottom: "15px",
                            marginTop: "25px",
                            borderRadius: "5px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "5px",
                        }}
                        >
                        <ErrorIcon sx={{ marginRight: "5px" }} />
                        <span>{errors[0]}</span>
                        </div>
                    )}
                    <LoginButton variant='contained' onClick={handleLogin}>Login</LoginButton> 
                    
                </Wrapper> 
                
            </Box>  
        </Component>
    )
}


