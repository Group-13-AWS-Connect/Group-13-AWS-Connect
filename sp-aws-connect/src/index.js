import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@aws-amplify/ui-react/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< Updated upstream
=======
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> Stashed changes
// import '@aws-amplify/ui-react/styles.layer.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< Updated upstream
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
  <BrowserRouter> 
    <React.StrictMode>
      <Navigation />
    </React.StrictMode>
  </BrowserRouter>
>>>>>>> Stashed changes
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
