import React from 'react';
import Navbar from '../components/Navbar';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
import img1 from '../components/assets/homepage1.png';
import img2 from '../components/assets/homepage2.png';
import img3 from '../components/assets/logo1.png';


const Container = styled.div`
height: calc(100vh-60px);
margin:3%;
`;
const Container1 = styled.div`
  flex: 1;
  margin: 5px;
  width: 100px;
  height: 110px;
  align-items: center;
  justify-content: center;
  background-color: #D9D9D9;
  position: relative;
  border-radius: 15px;
`;
const Container2 = styled.div`
display: flex;
height: calc(100vh-60px);
margin:40px;
justify-content: space-between;
`;
const Box = styled.div`
display: flex;
width: 300px;
height: 110px;
`;
const Box1 = styled.div`
width: 250px;
height: 250px;
background-color: #ffffff;
border-radius: 15px;
border: 1px solid #BFBFBF;
box-shadow: 0 0px 10px rgba(0, 0, 0, .15);
blur-radius:30;
`;
const Container3 = styled.div`
  flex: 1;
  height: 550px;
  align-items: center;
  background-color: #D9D9D9;
  position: relative;
  border-radius: 15px;
  border:0.1em solid ##D9D9D9;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
justify-content: space-between;
`;

const InfoContainer = styled.div`
flex: 1;
margin: 10% 7%;
justify-content: flex-start;
`;

const InfoContainer1 = styled.div`
flex: 1;
margin-top: -40%;
justify-content: flex-start;
`;

const Title = styled.h1`
  font-size: 35px;
  margin: 17% 0% 1% 10%;
  @media only screen and (max-width: 992px) {
    font-size: 30px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  margin: 0% 0% 0% 10%;
  color: #000000;
  @media only screen and (max-width: 993px) {
    display:none;
  }
`;
const Desc1 = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  color: #000000;
  @media only screen and (min-width: 993px) {
    display:none;
  }
  @media only screen and (max-width: 992px) {
    display:none;
  }
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    display:flex;
  }
  

`;
const Desc2 = styled.p`
  font-size: 16px;
  letter-spacing: 2px;
  color: #000000;
  @media only screen and (min-width: 993px) {
    display:none;
  }
  @media only screen and (max-width: 768px) {
    display:none;
  }
`;
const Button = styled.button`
margin: 15px 0px;
font-size: 15px;
display:inline-block;
padding:0.2em 0.8em;
border-radius:2em;
border:0.1em solid #000000;
text-decoration:none;
color:#FFFFFF;
background-color:#000000;
text-align:center;
position:relative;
text-align:center;
cursor: pointer;
display: flex;
&:active {
    background-color:#454545;
    }
  }
`
const ImgContainer = styled.div`
flex: 1;
padding: 0px 0px;
justify-content: flex-end;
pading
`;
const Img = styled.img`
position: relative;
right: -55%;
top:-395px;
@media only screen and (max-width: 992px) {
    display:none;
}
`
const Img1 = styled.img`
position: absolute;
right: 200px;
bottom :120px;
@media only screen and (max-width: 992px) {
  margin: 73% -18%;
}
@media only screen and (max-width: 768px) {
  margin: 80px 13px;
  right: 0px;
}
`
const Img3 = styled.img`
top:100px;
padding: 0px 20px;
`;
const Img4 = styled.img`
top:50px;
`
const Circle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #D9D9D9;
  position: absolute;
`;
const Buttonl = styled.button`
font-size: 20px;
display:inline-block;
padding:0.1em 0.7em;
border-radius:2em;
border:0.1em solid #A1A1A1;
text-decoration:none;
color:#000000;
background-color: transparent;
text-align:center;
cursor: pointer;
font-weight: semibold;
transition: all 0.2s;
display: flex;
&:hover {
    background-color:#C3CACE;
    }
  }
&:active {
    background-color:#EBEDEF;
    }
  }
`



const Home = () => {


  return (
    <div>
      <Navbar />
      <Divider />
      <Container>
        <InfoContainer>
          <Title>HEY! I AM<br /> <div style={{ fontSize: '45px', color: '#FF6412' }} >Hari Kumar B</div></Title>
          <Desc>I am a student in <br /> Vivekananda Degree college </Desc>
        </InfoContainer>
        <ImgContainer>
          <Img src={img2} height='400' width='400' alt='' />
        </ImgContainer>
      </Container>
      <InfoContainer1>
        <Title>About Me</Title>
        <Desc>Hey there!<br /> I'm a passionate and motivated student with a hunger for knowledge and a drive to make a positive <br /> impacton the world. I'm constantly seeking new challenges and opportunities to grow both<br /> academically and personally. </Desc>
      </InfoContainer1>

    </div>
  );
};

export default Home;
