import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "../../serviceWorker";

import Header from '../../view/header/header.js';
import Section1 from '../../view/section-1/section-1.js';
import Section2 from '../../view/section-2/section-2.js';
import Section3 from '../../view/section-3/section-3.js';
import Section4 from '../../view/section-4/section-4.js';
import Section5 from '../../view/section-5/section-5.js';
import Footer from '../../view/footer/footer.js';
import '../../css/index.css';


function Root() {
    return(
        <div>
            <body>
                <Header />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Footer />
            </body>
        </div>
    )
}

ReactDOM.render(<div><Header /><Section1 /><Section2 /><Section3 /><Section4 /><Section5 /><Footer /></div>, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default Root;