import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from'./components/Home';
import About from'./components/About';
import Contact from'./components/Contact';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Slider from './components/Slider';
import Prodetails from './components/Prodetails';



const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>,


  },
  {
    path: "/Home",
    element: <Slider/>,


  },



  {
    path: "/About",
    element: <About/>,


  },
{
  path: "/Contact",
  element: <Contact/>,


},

{
  path: "product/:productId",
  element: <Prodetails/>,


},








]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


