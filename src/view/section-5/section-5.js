import React from 'react';
import '../../css/section-5.css';
import { SplugaLogo } from '../../images_js/images-section-5.js';


function Section5() {
    return(
            <section class="section-5">
                <div class="div-section-5">
                    <img src={SplugaLogo} class="img-section-5" alt="spluga logo" />
                    <h4 class="text-section-5">
                        Thank you for joining Spluga and being part of the change!
                    </h4>
                </div>
            </section>
    )
}

export default Section5;