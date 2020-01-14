import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Root from "./view/root/index.js";
//import styled from 'styled-components';
//import '../src/css/index.css';
//import Header from '../src/view/header/header.js';
//import Section1 from '../src/view/section-1/section-1.js';

ReactDOM.render(<Root />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
