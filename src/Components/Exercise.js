import React, { Component } from 'react';
import WebCam from 'react-webcam';
import styled from 'styled-components';
import ExerciseGif from '../Assets/ExerciseGif.gif';
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
  top: 160px;
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
  top:90px;
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

class Exercise extends Component {
  render() {
    return (
      <MainContainer>
        <Title>Practice</Title>
        <PoseTitle>Exercise Name</PoseTitle>
        <Web>
          <Mcam/>
        </Web>
        <Image src={ExerciseGif} alt="Exercise Gif"/>
      </MainContainer>
    )
  }
}

export default Exercise;
