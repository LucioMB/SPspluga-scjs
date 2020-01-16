import React from 'react';
import styled, {css} from 'styled-components';
import {SplugaLogoWhite} from '../../images_js/images-section-1.js';
import {BgPattern} from '../../images_js/bg-pattern.js';


const Container = styled.section`
    background-image: linear-gradient(50deg, rgba(46, 177, 201, 0.3), rgba(81, 104, 233, 0.5)),
                    url(${BgPattern});
    background-repeat: repeat;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 200px;
    padding-bottom: 300px;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 991px){
        flex-direction: column;
        align-content: center;
    }

`;

const Text = styled.div`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 50px;
    font-weight: lighter;
    font-style: normal;
    color: #fff;
    padding: 0 0 0 80px;
    margin: 0 0 0 100px;

    ${
        props => props.primary && css`
        margin: 90px 0 90px 0;
`}

@media screen and (max-width: 991px){
        text-align: center;
        align-self: center;
        padding-left: 0;
        padding-right: 15%;
    }
`;

const Logo = styled.img`
    width: 560px;
    height: auto;
    padding: 100px 50px 10px 70px;
    border: 0px solid #000;
    vertical-align: top;
    margin-right: 150px;
    margin-bottom: 150px;
    padding-bottom: 0px;
    align-self: flex-end;

    @media screen and (min-width: 1200px) {
    img {
        width: 545px;
        height: auto;
    }
}

@media screen and (max-width: 1199px) and (min-width: 992px) {
    img {
        width: 445px;
        height: auto;
    }
}

@media screen and (max-width: 991px) {
    img {
        width: 750px;
        align-items: center;
        padding-right: 0;
        padding-left: 15%;
    }

    .section-1-text {
        text-align: center;
        align-self: center;
        padding-left: 0;
        padding-right: 15%;
    }

}

    @media screen and (max-width: 916px) {
    img {
        width: 540px;
        align-items: center;
        padding-right: 0;
        padding-left: 15%;
    }
}

@media screen and (max-width: 710px) {
    img {
        width: 400px;
        align-items: center;
        padding-right: 0;
        padding-left: 15%;
    }
}

    
`;

const Anchor = styled.a`
    background-color: transparent;
    color: #fff;
    padding: 20px 60px 20px 60px;
    border: 2px solid #fff;
    border-radius: 50px;
    margin: 0px 0 0 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 12px;
    font-weight: normal;
    text-align: center;

    :hover {
            background-color: #729FCF;
        }
`;


export default class Section1 extends React.Component {

    render() {
    return(
            <Container id="section-1">
                <Text>
                    Define your goals,
                    <br />
                    play the game,
                    <br />
                    improve your impact.
                    <div primary>
                        <Anchor href="#what-is-spluga">WHAT&nbsp;IS&nbsp;SPLUGA?</Anchor>
                    </div>
                </Text>
                    <Logo src={SplugaLogoWhite} alt="logo" />
            </Container>
        )
    }

}
