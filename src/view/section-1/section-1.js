import React from 'react';
import '../../css/section-1.css';
import {SplugaLogoWhite} from '../../images_js/images-section-1.js';


function Section1() {
    return(
            <section className="section-1" id="section-1">
                <div className="section-1-text">
                    Define your goals,
                    <br />
                    play the game,
                    <br />
                    improve your impact.
                    <div className="div-wiS">
                        <a href="#what-is-spluga" className="wiS">WHAT&nbsp;IS&nbsp;SPLUGA?</a>
                    </div>
                </div>
                <div className="section-logo-1">
                    <img src={SplugaLogoWhite} alt="logo" className="logo-1" />
                </div>
            </section>
    )
}

export default Section1;