import React, { Component } from 'react';
import WebCam from 'react-webcam';
import styled from 'styled-components';
import yogaPose from '../Assets/Pose6.PNG';
import Camera from './Camera';
import Mcam from './Mcam';

const MainContainer = styled.div`
  position: absolute; 
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: -5;
`;
const Image = styled.img`
  position: absolute;
  top: 280px;
  right: 200px;
`;

const Title = styled.h1`
  position: absolute;
  top:40px;
  left:60px;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 68px;
`;

const PoseTitle = styled.h1`
  position: absolute;
  top:185px;
  right:270px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 42px;
`; 


const Web = styled.div`
position: absolute;
top:185px;
left:120px;

`;

class Yoga extends Component {
  render() {
    return (
      <MainContainer>
        <Title>Practice</Title>
        <PoseTitle>Pose Name</PoseTitle>
        <Web>
          <Mcam/>
        </Web>
        <Image src={yogaPose} alt="Yoga Avatar"/>
      </MainContainer>
    )
  }
}

export default Yoga;
