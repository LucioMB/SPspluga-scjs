import React from 'react';
import '../../css/section-3.css';
import { NumbersBelieve, Mondora, Omnia } from '../../images_js/images-section-3.js';


function Section3() {
    return(
            <section className="section-3" id="how-does-it-work">
                <div className="div-section-3">
                    <h4 className="text-1-section-3">
                        How does it work?
                    </h4>
                    <div className="text-2-section-3">
                        Spluga is a software created by
                        <a href="https://mondora.com/" target="_blank" rel="noopener noreferrer">mOndOra</a>
                        and
                        <a href="http://numbersbelieve.com/" target="_blank" rel="noopener noreferrer">NumbersBelieve</a>.
                        <br />
                        It’s based on the
                        <a href="http://numbersbelieve.com/omnia" target="_blank" rel="noopener noreferrer">OMNIA</a>
                        platform, Simply connect to the platform and start creating your team and OKRs!
                    </div>
                    <div className="img-link-section-3">
                        <a href="http://numbersbelieve.com/" target="_blank" rel="noopener noreferrer"><img src={NumbersBelieve} alt="numbers-believe" /></a>
                        <a href="https://mondora.com/" target="_blank" rel="noopener noreferrer"><img src={Mondora} alt="mondora" /></a>
                        <a href="http://numbersbelieve.com/omnia" target="_blank" rel="noopener noreferrer"><img src={Omnia} alt="omnia" /></a>
                    </div>
                </div>
            </section>
    )
}

export default Section3;