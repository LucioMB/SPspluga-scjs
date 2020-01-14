import React from 'react';
import '../../css/section-2.css';
import { Define, Connect, Boost } from '../../images_js/images-section-2.js';


function Section2() {
    return(
                <section className="section-2" id="what-is-spluga">
                    <div className="top-section-2">
                        <h4 className="W-is-S">
                            What is Spluga?
                        </h4>
                        <div className="text-1-section-2">
                            Spluga is a software platform that allows you to set targets and goals, 
                            measure your progress over time and improve your social and environmental impact. 
                            Whether you are focusing on the environment, the community or your workers, 
                            Spluga will help you define Objectives and Key results, 
                            meter and analyse team progress over time, 
                            suggest ways to improve your impact and gear you towards reaching your target results.
                        </div>
                    </div>
                    <hr />
                    <div className="text-2-section-2">
                        Spluga is the place to be for companies looking to enhance their social 
                        and environmental responsibility.
                    </div>
                    <div className="text-3-section-2">
                        The platform can help you:
                    </div>
                    <div className="img-section-2">
                        <div className="div-define-section-2">
                            <img src={Define} className="img-define-section-2" alt="define" />
                            <ul className="ul-1-section-2">
                                <li className="li-1-section-2">
                                    Define and customise objectives and key results for your company.
                                </li>
                                <li className="li-2-section-2">
                                    Measure and track progress towards your set goals.
                                </li>
                            </ul>
                        </div>
                        <div className="div-connect-section-2">
                            <img src={Connect} className="img-connect-section-2" alt="connect" />
                            <ul className="ul-2-section-2">
                                <li className="li-3-section-2">
                                    Connect to your in-house data sources.
                                </li>
                                <li className="li-4-section-2">
                                    Work in teams, assign objectives and manage player performance.
                                </li>
                                <li className="li-5-section-2">
                                    Gain valuable insights into your company’s impact creation.
                                </li>
                            </ul>
                        </div>
                        <div className="div-boost-section-2">
                            <img src={Boost} className="img-boost-section-2" alt="boost" />
                            <ul className="ul-3-section-2">
                                <li className="li-6-section-2">
                                    Boost your impact with goal level improvement suggestions.
                                </li>
                                <li className="li-7-section-2">
                                    Easily create an Impact Report and share it with your Stakeholders.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
        )
}

export default Section2;