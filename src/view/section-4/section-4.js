import React from 'react';
import '../../css/section-4.css';


function Section4() {
    return(
            <section class="section-4" id="join-us">
                <div class="div-section-4">
                    <div class="div-text-section-4">
                        <h4 class="text-1-section-4">
                            Join us!
                        </h4>
                            We are now accepting users for our beta version of Spluga.
                            If you would like to test the platform and start measuring impact and reaching targets. 
                    </div>
                    <div class="div-input-section-4">
                        Please sign up here:
                        <br />
                        <input type="email" placeholder="E-mail" class="e-mail" />
                        <br />
                        <input type="submit" class="send" value="SEND" />
                    </div>
                </div>
            </section>
    )
}

export default Section4;