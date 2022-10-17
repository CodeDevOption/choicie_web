import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)