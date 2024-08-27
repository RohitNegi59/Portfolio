import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Head from './Head';
import Foot from './Foot';
import Mainbox from './Mainbox';
import Banner from './Banner';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head/>
    <Banner/>
    <Mainbox/>
    <Foot/>
  </React.StrictMode>
);














