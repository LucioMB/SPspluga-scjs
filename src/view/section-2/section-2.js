import React from 'react';
import styled from 'styled-components';
import { Define, Connect, Boost } from '../../images_js/images-section-2.js';


const Container = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: auto;
    width: 100%;
    margin: 0 0px 0px 0px;
    padding: 0 50px 0 50px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #888;      
    border: 0px solid #000;
`;

const Wis = styled.h4`
    font-size: 50px;
    font-weight: lighter;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    border: 0px solid #000;
    color: #000;
`;

const Text1 = styled.text`
    padding: 0 0 20px 0;
`;

const Hr = styled.hr`
    width: 100px;
    color: #fafafa;
`;

const Text2 = styled.text`
    padding: 80px 0 20px 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 21px;
    font-weight: lighter;
    color: #000;
`;

const List = styled.ul`
    list-style-type: circle;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    text-align: center;
    margin: 20px 50px 20px 50px;
    padding: 70px 50px 120px 50px;
    border: 0px solid #000;
    color: #000;

    & img {
        padding: 0 0 30px 0;
    }
`;

export default class Section2 extends React.Component {
    render() {
        return(
                <Container id="what-is-spluga">
                    <Wis>
                        What is Spluga?
                    </Wis>
                    <Text1>
                        Spluga is a software platform that allows you to set targets and goals, 
                        measure your progress over time and improve your social and environmental impact. 
                        Whether you are focusing on the environment, the community or your workers, 
                        Spluga will help you define Objectives and Key results, 
                        meter and analyse team progress over time, 
                        suggest ways to improve your impact and gear you towards reaching your target results.
                    </Text1>
                    <Hr />
                    <Text2>
                        Spluga is the place to be for companies looking to enhance their social 
                        and environmental responsibility.
                    </Text2>
                        The platform can help you:
                    <List>
                            <ul>
                                <img src={Define} alt="define" />
                                <li>
                                    Define and customise objectives and key results for your company.
                                </li>
                                <li>
                                    Measure and track progress towards your set goals.
                                </li>
                            </ul>
                            <ul>
                            <img src={Connect} alt="connect" />
                                <li>
                                    Connect to your in-house data sources.
                                </li>
                                <li>
                                    Work in teams, assign objectives and manage player performance.
                                </li>
                                <li>
                                    Gain valuable insights into your company’s impact creation.
                                </li>
                            </ul>
                            <ul>
                            <img src={Boost} alt="boost" />
                                <li>
                                    Boost your impact with goal level improvement suggestions.
                                </li>
                                <li>
                                    Easily create an Impact Report and share it with your Stakeholders.
                                </li>
                            </ul>
                    </List>
                </Container>
        )
    }
}

