import React from 'react';
import styled from 'styled-components';
import { SplugaLogo } from '../../images_js/images-section-5.js';
import {BgPattern} from '../../images_js/bg-pattern.js';


const Container = styled.div`
    height: auto;
    width: 100%;
    background-image: linear-gradient(60deg, rgba(184, 57, 7, 0.5), rgba(31, 7, 9, 0.5)),
                        url(${BgPattern});
    background-repeat: repeat;

    display: flex;
    flex-direction: column;
    align-items: center;
    vertical-align: middle;

    & img {
    width: 120px;
    height: auto;
    margin: 0px 0 10px 0;
    padding: 100px 0 0 0;
    }

    & h4 {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 45px;
    font-weight: lighter;
    color: #fff;
    text-align: center;
    padding: 0 40px 100px 40px;
    }

`;


function Section5() {
    return(
            <Container>
                    <img src={SplugaLogo} alt="spluga logo" />
                    <h4>
                        Thank you for joining Spluga and being part of the change!
                    </h4>
            </Container>
    )
}

export default Section5;