import React from 'react'
import Navbar from '../components/Navbar';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  border: 0.1em solid #D3D3D3;
  margin-top: 11.5%;
  &:hover {
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.15);
  }
  @media only screen and (max-width: 992px) {
    width: 47%;
    margin-top: 15%;
  }
  @media only screen and (max-width: 760px) {
    width: 70%;
    margin-top: 30%;
  }
`;

const Title = styled.h1`
  font-size: 35px;
  margin: 15% 0% 1% 0%;
  @media only screen and (max-width: 992px) {
    font-size: 30px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  color: #000000;
  @media only screen and (max-width: 993px) {
    display:none;
  }
`;


const Contact = () => {
    return (
        <div>
            <Navbar />
            <Divider />
            <Container>
                <Desc>Contact Us</Desc>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" defaultValue="   +1(555) 123-4567" variant="standard" InputProps={{ readOnly: true }} InputLabelProps={{
                        shrink: true,
                    }} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: "5%" }}>
                    <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" defaultValue="   hello@example.com" variant="standard" InputProps={{ readOnly: true }} InputLabelProps={{
                        shrink: true,
                    }}/>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: "5%", marginBottom: "10%" }}>
                    <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" defaultValue="   Vishakapatnam" variant="standard" InputProps={{ readOnly: true }} InputLabelProps={{
                        shrink: true,
                    }} />
                </Box>
            </Container>

        </div>
    )
}

export default Contact
