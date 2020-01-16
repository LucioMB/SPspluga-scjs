import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: auto;
    width: 100%;
    border: 0px solid #000;
    background-color: #fff;
    vertical-align: middle;

    display: flex;
    flex-direction: row;
    vertical-align: middle;

    & h4 {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 50px;
    font-weight: lighter;
    color: #000;
    border: 0px solid #000;
    }
`;

const Text = styled.text`
    display: flex;
    flex-direction: column;
    vertical-align: middle;
    margin: 0px 50px 0 100px;
    padding: 0px 50px 100px 50px;
    border: 0px solid #000;
    width: 50%;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const Send = styled.div`
    width: 50%;
    margin: 25px 25px 0 50px;
    padding: 100px 25px 0 50px;
    border: 0px solid #000;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 20px;
    font-weight: lighter;

    & #email {
    width: 220px;
    height: 30px;
    border-radius: 3px;
    margin: 10px 0 0 0;
    padding: 10px 0 10px 5px;
    vertical-align: middle;

    }

    & #send {
    color: #99c5c2;
    background-color: #fff;
    padding: 15px 35px 15px 35px;
    margin: 20px 0 0 0;
    border: 2px solid #99c5c2;
    border-radius: 50px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 12px;
    font-weight: normal;
    text-align: center;
    }

    & #send:hover {
    background-color: #99c5c2;
    color: #fff;
    cursor: pointer;
    }

`;


function Section4() {
    return(
            <Container id="join-us">
                <Text>
                    <h4 class="text-1-section-4">
                        Join us!
                    </h4>
                        We are now accepting users for our beta version of Spluga.
                        If you would like to test the platform and start measuring impact and reaching targets.
                </Text>
                <Send>
                    Please sign up here:
                    <br />
                    <input type="email" placeholder="E-mail" id="email" />
                    <br />
                    <input type="submit" value="SEND" id="send" />
                </Send>
            </Container>
    )
}

export default Section4;