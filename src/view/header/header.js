import React from 'react';
//import styled from 'styled-components';
import styled, { css } from 'styled-components';
//import '../../css/header-sc.css';
import '../../css/header.css';
//import renderer from 'react-test-renderer';
//import 'jest-styled-components';


const Container = styled.header`
    position: fixed;
    width: 100%;
    height: 70px;
    margin: 0 0 0 0;
    padding: 10px 10px 0 15px;
    background-color: transparent;
    grid-column: auto;
    border: 0px solid #000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: none;
`;

const Nav = styled.div`
    height: 50px;
    margin: 0 0 0 0;
    padding: 0 10px 0 15px;
    border: 0px solid #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    ${props => props.primary && css`
    padding: 0 50px;
  `}
`;

const Anchor = styled.a`
    text-decoration: none;
    font-size: 10px;
    font-weight: lighter;
    color: #84eced;
    margin-right: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    ${props => props.primary && css`
    font-style: normal;
    font-size: 20px;
    font-weight: lighter;
    margin: 60px;
    color: #84eced;
    `}
`

function Header() {
        return(
        <>
            <div  id="top"></div>
            <Container>
                <header>
                    <Nav>
                        <Anchor>
                            <a primary href="#top">SPLUGA</a>
                                <div primary>
                                    <a href="#what-is-spluga">WHAT IS SPLUGA?</a>
                                    <a href="#how-does-it-work">HOW DOES IT WORK?</a>
                                    <a href="#join-us">JOIN US!</a>
                                </div>
                        </Anchor>
                    </Nav>
                </header>
            </Container>
        </>
    )
}

export default Header;


