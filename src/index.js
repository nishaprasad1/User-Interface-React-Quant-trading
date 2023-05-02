import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Contact from './Components/Contact'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import BuyStrategies from './Components/BuyStrategies1';
import Subscription from './Components/Subscription';
const loggedCustomer = localStorage.getItem("authenticated")
console.log("index" + ""+ loggedCustomer);



const root = ReactDOM.createRoot(document.getElementById('root'));
var loginProfileElement = false;
if (localStorage.getItem("validPhoneNO")!=null && localStorage.getItem("validPhoneNO")!=undefined) {
  loginProfileElement = <> <Profile /></>
  //alert("Profile");
} else {
  loginProfileElement = <> <Login /></>
  //alert("Login");

}

const route = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    //  element:<Subscription/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      {
        path: "/login",
        element: loginProfileElement
      },
      
      // {
      //   path: "/profile",
      //   element: <Profile  isLogged ={loggedCustomer} />
      // }
      {
        path: "/profile",
        element: loginProfileElement
      }
      ,
      {
        path: "buyStrategy1",
        element: <BuyStrategies />

      }, 
      {
        path: "/contact",
        element: <Contact />

      },

      {
        path: "/subscription",
        element: <Subscription />

      }
    ]
  },
]);
root.render(
  <>
    <ToastContainer />
    <RouterProvider router={route} />
    <Footer/>
  </>
);
