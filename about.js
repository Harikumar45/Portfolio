import React from 'react'
import Navbar from '../components/Navbar';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
import img1 from '../components/assets/homepage1.png';

const Container = styled.div`
height: calc(40vh-60px);
margin:3%;
`;

const InfoContainer = styled.div`
flex: 1;
margin: 10% 7%;
justify-content: flex-start;
@media only screen and (max-width: 992px) {
  margin: 15% 3%;
}
@media only screen and (max-width: 768px) {
  margin: 2% 7%;
}
`;

const Title = styled.h1`
  font-size: 45px;
  margin: 13% 0% 1% 0%;
  @media only screen and (max-width: 992px) {
    font-size: 30px;
  }
`;

const Title1 = styled.h1`
  font-size: 45px;
  margin: -30% 0% 1% 38%;
  @media only screen and (max-width: 992px) {
    font-size: 30px;
  }
`;
const Desc9 = styled.p`
  font-size: 25px;
  letter-spacing: 2px;
  color: #000000;
  text-align: center;
  margin: 2% 0% 1% 0%;
  @media only screen and (max-width: 993px) {
    display:none;
  }
`;
const Desc10 = styled.p`
  font-size: 25px;
  letter-spacing: 2px;
  color: #000000;
  text-align: center;
  margin: 1% 0% 1% 0%;
  @media only screen and (max-width: 993px) {
    display:none;
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

const ImgContainer = styled.div`
flex: 1;
padding: 0px 0px;
justify-content: flex-end;
pading
`;
const Img = styled.img`
position: relative;
right: -60%;
top:-425px;
`
const Img1 = styled.img`
position: absolute;
right: 100px;
@media only screen and (max-width: 992px) {
  margin: 73% -18%;
}
@media only screen and (max-width: 768px) {
  margin: 80px 13px;
  right: 0px;
}
`



const About = () => {
    return (
        <div>
            <Navbar />
            <Divider />
            <Container>
                <InfoContainer>
                    <Title>About Me</Title>
                    <Desc>Hey there!<br /> I'm a passionate and motivated student with a hunger<br />for knowledge and a drive to make a positive impact<br />on the world. I'm constantly seeking new challenges<br />and opportunities to grow both academically <br />and personally. </Desc>
                </InfoContainer>
                <ImgContainer>
                    <Img src={img1} height='400' width='400' alt='' />
                </ImgContainer>
            </Container>
            <Title1>Team Members</Title1>
            <Desc9>bheesetti harikumar</Desc9>
            <Desc10>Kona Maheswararao</Desc10>
            <Desc10>Gundu Ramu</Desc10>
            <Desc10>Gonthini Jageadeesh</Desc10>
            <Desc10>Karanam Jagan</Desc10>

        </div>
    )
}

export default About
