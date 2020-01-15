import React from 'react';
import styled, { css } from 'styled-components';
import '../../css/header.css';


const Container = styled.header`
    position: fixed;
    width: 100%;
    height: auto;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    background-color: transparent;
    grid-column: auto;
    border: 0px solid #000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: none;
`;

const Nav = styled.div`
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    border: 0px solid #000;

    ${props => props.primary && css`
    padding: 0 50px;
  `}
`;

const Anchor = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    margin-right: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border: 0px solid #000;
    height: 70px;


    ${props => props.primary && css`
    align-content: flex-end;
    `}
`;

const Sp = styled.a`
    font-style: normal;
    font-size: 20px;
    font-weight: lighter;
    margin: 60px;
    color: #84eced;
`;

const Wis = styled.a`
    font-size: 10px;
    font-weight: lighter;
    color: #84eced;
    margin-right: 20px;
`;

const Hdw = styled.a`
    font-size: 10px;
    font-weight: lighter;
    color: #84eced;
    margin-right: 20px;
`;

const Ju = styled.a`
    font-size: 10px;
    font-weight: lighter;
    color: #84eced;
    margin-right: 20px;
    align-content: flex-end;
`;


function Header() {
        return(
        <>
            <div  id="top"></div>
            <Container>
                    <Nav>
                        <Anchor>
                            <Sp primary href="#top">SPLUGA</Sp>
                                <div primary>
                                    <Wis href="#what-is-spluga">WHAT IS SPLUGA?</Wis>
                                    <Hdw href="#how-does-it-work">HOW DOES IT WORK?</Hdw>
                                    <Ju href="#join-us">JOIN US!</Ju>
                                </div>
                        </Anchor>
                    </Nav>
            </Container>
        </>
    )
}

export default Header;


