import React, { useState } from "react";
import {
  Typography,
  Button,
  useMediaQuery,
  styled,
  RadioGroup,
  FormControlLabel,
  Radio,
  Snackbar,
} from "@mui/material";
import back from "../images/contactDesign.png";
import location from "../images/oLocation.png";
import mail from "../images/oMail.png";
import phone from "../images/oPhone.png";
import linkedin from "../images/olinkedin.png";
import facebook from "../images/oFacebook.png";
import insta from "../images/oInstagram.png";
import youtube from "../images/oYoutube.png";
import send from "../images/letter_send.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { API } from "../services/api";


export default function ContactMain() {
  const isMedium = useMediaQuery("(max-width:900px)");
  const isMobile = useMediaQuery("(max-width:375px)");

  const InputStyle = styled("input")({
    border: "none",
    outline: "none",
    borderRadius: "0",
    borderBottom: "1px solid #ccc",
    color: "#333",
    marginBottom: "10px",
    width: isMedium ? "250px" : "280px",
    "&:hover": {
      borderBottom: "1px solid #011C2A",
    },
    "&:focus": {
      outline: "none",
      borderBottom: "1px solid #011C2A",
    },
    lineHeight: "1.5",
    caretColor: "#011C2A",
  });

  const LabelBox = styled("div")({
    display: "inline-block",
    width: isMedium ? "100%" : "auto",
  });

  const [detail, setDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    message: ""
  });

  const [focusedInput, setFocusedInput] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !detail.firstName ||
      !detail.lastName ||
      !detail.email ||
      !detail.phone ||
      !detail.role ||
      !detail.message
    ) {
      setError("Please fill in all fields.");
      return;
    }
    if (detail.firstName.length < 3) {
      setError("Please enter a valid first name.");
      return;
    }
    if (detail.lastName.length < 3) {
      setError("Please enter a valid last name.");
      return;
    }
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(detail.phone)) {
      setError("Please enter a valid phone number.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(detail.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (detail.message.length < 10) {
      setError("Message length should be at least 10 characters");
      return;
    }
    // debugging
    console.log("Form submitted:");
    console.log(detail);
    // console.log(response.data.msg.value)
    // 
    try{
      const response = await API.contactUs(detail)
    if (response.isError === true){
      setError(`${response.data.msg.value}`);
       
    } else{
      setError("");
      setOpenSnackbar(true);
    }
    } catch (error){
      console.log(error)
    }
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        background: "#F5F5F5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: "60px",
      }}
    >
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message="Message sent successfully"
      />
      <div
        style={{
          textAlign: "center",
          paddingTop: "20px",
          marginBottom: "40px",
        }}
      >
        <Typography
          style={{ color: "#F26522", fontSize: "1.8em", fontWeight: "bold" }}
        >
          Contact Us
        </Typography>
        <Typography style={{ fontSize: "15px" }}>
          Any question or remarks? Just write us a message!
        </Typography>
      </div>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexWrap: "wrap",
          borderRadius: "5px",
          padding: isMobile ? "10px" : "10px",
          width: isMobile ? "90%" : "80%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${back})`,
            height: "600px",
            maxWidth: "491px",
            minWidth: isMobile ? "270px" : "300px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            borderRadius: "10px",
            flex: "1",
          }}
        >
          <div style={{ marginLeft: "40px" }}>
            <Typography
              style={{
                fontSize: isMedium ? "1em" : "1.2em",
                fontWeight: "bold",
              }}
            >
              Contact Information
            </Typography>
            <Typography
              style={{ fontSize: "15px", color: "#C9C9C9", textWrap: "wrap" }}
            >
              Say something to start a live chat!
            </Typography>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  src={phone}
                  alt=""
                  style={{ margin: "40px 20px", marginLeft: "40px" }}
                />
              </div>
              <div style={{ margin: "40px 10px", maxWidth: "300px" }}>
                <Typography>+91 738 393 5915</Typography>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  src={mail}
                  alt=""
                  style={{ margin: "40px 20px", marginLeft: "40px" }}
                />
              </div>
              <div style={{ margin: "40px 10px", maxWidth: "300px" }}>
                <Typography>citysupport@gmail.com</Typography>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  src={location}
                  alt=""
                  style={{ margin: "40px 20px", marginLeft: "40px" }}
                />
              </div>
              <div style={{ margin: "40px 10px", maxWidth: "300px" }}>
                <Typography>
                  A/10, Silicon Valley B/h, Post Office, City Town, Dwarka,
                  Delhi, 380008
                </Typography>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginLeft: "40px",
            }}
          >
            <div>
              <a href="https://in.linkedin.com/"><img
                src={linkedin}
                style={{ width: "40px", margin: "10px", cursor: "pointer" }}
                alt=""
              /></a>
            </div>
            <div>
              <a href="https://www.facebook.com/"><img
                src={facebook}
                style={{ width: "40px", margin: "10px", cursor: "pointer" }}
                alt=""
              /></a>
            </div>
            <div>
              <a href="https://www.instagram.com/"><img
                src={insta}
                style={{ width: "40px", margin: "10px", cursor: "pointer" }}
                alt=""
              /></a>
            </div>
            <div>
              <a href="https://www.youtube.com/"><img
                src={youtube}
                style={{ width: "40px", margin: "10px", cursor: "pointer" }}
                alt=""
              /></a>
            </div>
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <div
            style={{
              paddingLeft: isMedium ? "20px" : "100px",
              paddingRight: isMedium ? "20px" : "60px",
              marginTop: isMedium ? "  20px" : "0px",
              height: "100%",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                height: "100%",
              }}
            >
              {error && (
                <div
                  style={{
                    color: "white",
                    background: "#FF7F7F",
                    marginBottom: "15px",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                  }}
                >
                  <ErrorIcon sx={{ marginRight: "5px" }} />
                  <span>{error}</span>
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: isMedium ? "center" : "space-between",
                  width: "100%",
                }}
              >
                <LabelBox>
                  <label htmlFor="firstName">First Name</label>
                  <br />
                  <InputStyle
                    type="text"
                    name="firstName"
                    value={detail.firstName}
                    onChange={inputChange}
                    onFocus={() => setFocusedInput("firstName")}
                    onBlur={() => setFocusedInput("")}
                    autoFocus={focusedInput === "firstName"}
                  />
                </LabelBox>
                <LabelBox>
                  <label htmlFor="lastName">Last Name</label>
                  <br />
                  <InputStyle
                    type="text"
                    name="lastName"
                    value={detail.lastName}
                    onChange={inputChange}
                    onFocus={() => setFocusedInput("lastName")}
                    onBlur={() => setFocusedInput("")}
                    autoFocus={focusedInput === "lastName"}
                  />
                </LabelBox>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: isMedium ? "center" : "space-between",
                  }}
                >
                  <LabelBox>
                    <label htmlFor="email">Email</label>
                    <br />
                    <InputStyle
                      type="text"
                      name="email"
                      value={detail.email}
                      onChange={inputChange}
                      onFocus={() => setFocusedInput("email")}
                      onBlur={() => setFocusedInput("")}
                      autoFocus={focusedInput === "email"}
                    />
                  </LabelBox>
                  <LabelBox>
                    <label htmlFor="phone">Phone Number</label>
                    <br />
                    <InputStyle
                      type="text"
                      name="phone"
                      value={detail.phone}
                      onChange={inputChange}
                      onFocus={() => setFocusedInput("phone")}
                      onBlur={() => setFocusedInput("")}
                      autoFocus={focusedInput === "phone"}
                    />
                  </LabelBox>
                </div>
              </div>
              <div>
                <label
                  htmlFor="selectRole"
                  style={{
                    paddingTop: "10px",
                    display: "block",
                    paddingBottom: "5px",
                    color: "rgb(1 37 56)",
                    fontWeight: "bold",
                  }}
                >
                  Select Role?
                </label>
                <RadioGroup
                  name="selectRole"
                  value={detail.role}
                  onChange={(e) => setDetail((prev) => ({ ...prev, role: e.target.value }))}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <FormControlLabel
                        value="Tourist"
                        control={
                          <Radio
                            checkedIcon={
                              <CheckCircleIcon style={{ color: "#011C2A" }} />
                            }
                          />
                        }
                        label="Tourist"
                      />
                    </div>
                    <div>
                      <FormControlLabel
                        value="Local Resident"
                        control={
                          <Radio
                            checkedIcon={
                              <CheckCircleIcon style={{ color: "#011C2A" }} />
                            }
                          />
                        }
                        label="Local Resident"
                      />
                    </div>
                    <div>
                      <FormControlLabel
                        value="Local Businessman"
                        control={
                          <Radio
                            checkedIcon={
                              <CheckCircleIcon style={{ color: "#011C2A" }} />
                            }
                          />
                        }
                        label="Local Businessman"
                      />
                    </div>
                    <div>
                      <FormControlLabel
                        value="other"
                        control={
                          <Radio
                            checkedIcon={
                              <CheckCircleIcon style={{ color: "#011C2A" }} />
                            }
                          />
                        }
                        label="Other"
                      />
                    </div>
                  </div>
                </RadioGroup>
              </div>
              <div style={{ marginTop: "10px", color: "#8D8D8D" }}>
                <label htmlFor="message">Message</label>
                <br />
                <input
                  type="text"
                  name="message"
                  placeholder="Write your message.."
                  value={detail.message}
                  onChange={(e) => setDetail((prev) => ({ ...prev, message: e.target.value }))}
                  style={{
                    "&:placeholder": { fontSize: "20px", color: "#8D8D8D" },
                    border: "none",
                    outline: "none",
                    borderRadius: "0",
                    borderBottom: "1px solid #ccc",
                    color: "#333",
                    marginBottom: "10px",
                    marginTop: "10px",
                    transition: "1s",
                    width: "100%",
                    "&:hover": {
                      borderBottom: "1px solid #011C2A",
                    },
                    "&:focus": {
                      outline: "none",
                      borderBottom: "1px solid #011C2A",
                    },
                  }}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "#011C2A",
                    color: "white",
                    "&:hover": {
                      background: "black",
                    },
                  }}
                >
                  Send Message
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={send} alt="" style={{ width: "170px" }} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
