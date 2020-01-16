import React from 'react';
import styled from 'styled-components';
import { NumbersBelieve, Mondora, Omnia } from '../../images_js/images-section-3.js';
import {BgPattern} from '../../images_js/bg-pattern.js';


const Container = styled.div`
    background-image: linear-gradient(70deg, rgba(10, 92, 27, 0.3), rgba(56, 21, 23, 0.5)),
                        url(${BgPattern});
    background-repeat: repeat;
    border: 0px solid #000;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    text-align: center;
    margin: -0px 0 0 0;
    padding: 20px 0 80px 0;

    & h4 {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 55px;
    font-weight: lighter;
    color: #fff;
    }

`;

const Text = styled.text`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #fff;
    margin: -30px 0 25px 0;
    padding: 0 40px 25px 40px;

    & a {
    color: #85C6C2;
    }
`;

const Logo = styled.a`

    & img {
    width: 120px;
    height: auto;
    vertical-align: middle;
    margin: 20px 20px 20px 20px;
    padding: 0 0 80px 0;
    border: 0px solid #000;
    }
`;

function Section3() {
    return(
            <Container id="how-does-it-work">
                <h4 className="text-1-section-3">
                    How does it work?
                </h4>
                <Text>
                    Spluga is a software created by
                    <a href="https://mondora.com/" target="_blank" rel="noopener noreferrer"> mOndOra </a>
                    and
                    <a href="http://numbersbelieve.com/" target="_blank" rel="noopener noreferrer"> NumbersBelieve </a>.
                    <br />
                    It’s based on the
                    <a href="http://numbersbelieve.com/omnia" target="_blank" rel="noopener noreferrer"> OMNIA </a>
                    platform, Simply connect to the platform and start creating 
                    <br />
                    your team and OKRs!
                </Text>    
                <Logo>
                    <a href="http://numbersbelieve.com/" target="_blank" rel="noopener noreferrer"><img src={NumbersBelieve} alt="numbers-believe" /></a>
                    <a href="https://mondora.com/" target="_blank" rel="noopener noreferrer"><img src={Mondora} alt="mondora" /></a>
                    <a href="http://numbersbelieve.com/omnia" target="_blank" rel="noopener noreferrer"><img src={Omnia} alt="omnia" /></a>
                </Logo>
            </Container>
    )
}

export default Section3;