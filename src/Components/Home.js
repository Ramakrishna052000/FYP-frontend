import React, {Component} from 'react';
import styled from 'styled-components';
import yogaAvatar from '../Assets/yoga.png';
import { Link } from 'react-router-dom';
import WebCam from 'react-webcam';


var light_color= "#fff0f0";
var color = "#ffe9e9";
var dark_color= "#f9c4d2";
var color_border = "#b18597";
var color_shadow = "#ffe3e2";

const MainContainer = styled.div`
  position: absolute; 
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: #fef3f6;
  z-index: -5;
`;

const Title = styled.h1`
  position: absolute; 
  top:50px;
  left:100px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 64px;
`;

const Subtext = styled.h2`
  position: absolute; 
  top:160px;
  left:120px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 32px;
`;

const BackgroundImg =styled.div`
    position: absolute;
    top: 150px;
    right:100px;
    z-index: -1;
    border-radius: 50%;
    background-color: #fbd6e0;
    box-shadow: 0px 0px 0px 120px #fbdce4, 0px 0px 0px 240px #fde7ed, 0px 0px 0px 360px #fef3f6;
    width: 500px;
    height:500px;
    margin: 3em;
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 150px;
  left: 170px;
  display: inline-flex!important;
  flex-direction: column;
  width: auto;
  align-items: flex-start;
  justiy-contenft: center;
  float: left;
`;

const Button = styled.button`
  position: relative;
  margin: 16px;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: 18px;
  font-family: inherit;
    font-weight: 600;
    color: #382b22;
    text-transform: uppercase;
    padding: 1.25em 2em;
    background: ${light_color};
    border: 2px solid ${color_border};
    border-radius: 0.75em;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
    &:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${dark_color};
        border-radius: inherit;
        box-shadow: 0 0 0 2px ${color_border}, 0 0.625em 0 0 ${color_shadow};
        transform: translate3d(0, 0.75em, -1em);
        transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }
        &:hover {
        background: ${color};
        transform: translate(0, 0.25em);
            &:before {
                box-shadow: 0 0 0 2px ${color_border}, 0 0.5em 0 0 ${color_shadow};
                transform: translate3d(0, 0.5em, -1em);
            }
        }
        &:active {
        background: ${color};
        transform: translate(0em, 0.75em);
            &:before {
                box-shadow: 0 0 0 2px ${color_border}, 0 0 ${color_shadow};
                transform: translate3d(0, 0, -1em);
            }
        }
    }
`;

const Image =styled.img`
  position: absolute;
  top: 250px;
  right:191px;
  height: 400px;
  width: 400px;
  z-index: 10;
`;


function handleClick()
{
    console.log("clicked");
}

class Home extends Component{
  render() {
    return (
      <>
        <MainContainer>
            <Title>Welcome to VirtualTrainer</Title>
            <Subtext>Your AI Yoga Companion</Subtext>
            <Wrapper>
                <Link to="/yoga">
                    <Button onClick={handleClick}>Yoga</Button>
                </Link>
                <Link to="/exercise">
                    <Button onClick={handleClick}>Exercise</Button>
                </Link>
                <Link to="/about">
                    <Button onClick={handleClick}>About virtualTrainer</Button>
                </Link>
            </Wrapper>
            <Image src={yogaAvatar} alt="Yoga Avatar"/>
            <BackgroundImg/>
            
        </MainContainer>
      </>
    )
  }
};

export default Home;