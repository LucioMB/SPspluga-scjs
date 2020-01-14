import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from '../header/header';

import * as serviceWorker from './serviceWorker';

export default Root;

//ReactDOM.render(<div><Header /></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="./css/index.css">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/section-1.css">
    <link rel="stylesheet" href="./css/section-2.css">
    <link rel="stylesheet" href="./css/section-3.css">
    <link rel="stylesheet" href="./css/section-4.css">
    <link rel="stylesheet" href="./css/section-5.css">
    <link rel="stylesheet" href="./css/footer.css">

    <title>SPLUGA</title>
</head>
<body>
    <header id="#top" class="header">
        <nav class="nav-header">
            <div class="div-header">
                <a href="#top" class="top-S">SPLUGA</a>
                    <div class="nav-right-1">
                        <a href="#what-is-spluga" class="top-W">WHAT IS SPLUGA?</a>
                        <a href="#how-does-it-work" class="top-H">HOW DOES IT WORK?</a>
                        <a href="#join-us" class="top-J" id="top-J">JOIN US!</a>
                    </div>
            </div>
        </nav>
    </header>
    <section class="section-1" id="section-1">
        <div class="section-1-text">
            Define your goals,
            <br />
            play the game,
            <br />
            improve your impact.
            <div class="div-wiS">
                <a href="#what-is-spluga" class="wiS">WHAT&nbsp;IS&nbsp;SPLUGA?</a>
            </div>
        </div>
        <div class="section-logo-1">
            <img src="./images/spluga-logo-white.png" alt="logo" class="logo-1" />
        </div>
    </section>
    <a name="what-is-spluga"></a>
    <section class="section-2" id="section-2">
        <div class="top-section-2">
            <h4 class="W-is-S">
                What is Spluga?
            </h4>
            <div class="text-1-section-2">
                Spluga is a software platform that allows you to set targets and goals, 
                measure your progress over time and improve your social and environmental impact. 
                Whether you are focusing on the environment, the community or your workers, 
                Spluga will help you define Objectives and Key results, 
                meter and analyse team progress over time, 
                suggest ways to improve your impact and gear you towards reaching your target results.
            </div>
        </div>
        <hr />
        <div class="text-2-section-2">
            Spluga is the place to be for companies looking to enhance their social 
            and environmental responsibility.
        </div>
        <div class="text-3-section-2">
            The platform can help you:
        </div>
        <div class="img-section-2">
            <div class="div-define-section-2">
                <img src="./images/define.png" class="img-define-section-2" />
                <ul class="ul-1-section-2">
                    <li class="li-1-section-2">
                        Define and customise objectives and key results for your company.
                    </li>
                    <li class="li-2-section-2">
                        Measure and track progress towards your set goals.
                    </li>
                </ul>
            </div>
            <div class="div-connect-section-2">
                <img src="./images/connect.png" class="img-connect-section-2" />
                <ul class="ul-2-section-2">
                    <li class="li-3-section-2">
                        Connect to your in-house data sources.
                    </li>
                    <li class="li-4-section-2">
                        Work in teams, assign objectives and manage player performance.
                    </li>
                    <li class="li-5-section-2">
                        Gain valuable insights into your company’s impact creation.
                    </li>
                </ul>
            </div>
            <div class="div-boost-section-2">
                <img src="./images/boost.png" class="img-boost-section-2" />
                <ul class="ul-3-section-2">
                    <li class="li-6-section-2">
                        Boost your impact with goal level improvement suggestions.
                    </li>
                    <li class="li-7-section-2">
                        Easily create an Impact Report and share it with your Stakeholders.
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <a name="how-does-it-work"></a>
    <section class="section-3">
        <div class="div-section-3">
            <h4 class="text-1-section-3">
                How does it work?
            </h4>
            <div class="text-2-section-3">
                Spluga is a software created by
                <a href="https://mondora.com/" target="_blank">mOndOra</a>
                and
                <a href="http://numbersbelieve.com/" target="_blank">NumbersBelieve</a>.
                <br />
                It’s based on the
                <a href="http://numbersbelieve.com/omnia" target="_blank">OMNIA</a>
                platform, Simply connect to the platform and start creating your team and OKRs!
            </div>
            <div class="img-link-section-3">
                <a href="http://numbersbelieve.com/" target="_blank"><img src="./images/numbers-believe-logo.png" /></a>
                <a href="https://mondora.com/" target="_blank"><img src="./images/mondora-logo.png" /></a>
                <a href="http://numbersbelieve.com/omnia" target="_blank"><img src="./images/omnia-logo.png" /></a>
            </div>
        </div>
    </section>
    <a name="join-us"></a>
    <section class="section-4">
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
    <section class="section-5">
        <div class="div-section-5">
            <img src="./images/spluga-logo-white-02.png" class="img-section-5" />
            <h4 class="text-section-5">
                Thank you for joining Spluga and being part of the change!
            </h4>
        </div>
    </section>
    <footer>
        <h6 class="text-footer">
            Copyright © 2018 mOndOra. All Rights Reserved.
            <br />
            mOndOra s.r.l. S.B. - Via Uberto Visconti di Modrone 33 - 20122 Milano c.f. e p. iva 03680680968 cap. soc. 105.000 i.v. - Rea n. 1694989
            <br />
            soggetta all’attività di direzione e coordinamento di TeamSystem S.p.A.,
            <br />
            codice fiscale e iscrizione presso la CCIAA di Pesaro n. 01035310414
            <br />
            Privacy 
        </h6>
    </footer>
    
</body>
</html>
*/