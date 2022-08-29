import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

import "./css/animate.css";
import "./css/icomoon.css";
import "./css/ionicons.min.css";
import "./css/bootstrap.min.css";
import "./css/magnific-popup.css";
import "./css/flexslider.css";
import "./css/owl.carousel.min.css";
import "./css/owl.theme.default.min.css";
import "./css/bootstrap-datepicker.css";
import "./fonts/flaticon/font/flaticon.css";
import "./css/style.css";
import Login from './components/Login';



// import "./assets/js/jquery.min"
// import "./assets/js/popper.min";
// import "./assets/js/bootstrap.min";
// import "./assets/js/jquery.easing.1.3";
// import "./assets/js/jquery.waypoints.min";
// import "./assets/js/jquery.flexslider-min";
// import "./assets/js/owl.carousel.min";
// import "./assets/js/jquery.magnific-popup.min";
// import "./assets/js/magnific-popup-options";
// import "./assets/js/bootstrap-datepicker";
// import "./assets/js/jquery.stellar.min";
// import "./assets/js/main";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <App />
  
    
    
  </React.StrictMode>
  
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
