import RouterComponent from './router/';
// import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'

import './App.css'

const isUserAuthenticated = localStorage.getItem("isAuth");
const App = () =>
(
  <>
    { isUserAuthenticated && <Navbar /> }
    <RouterComponent />
  </>
)


export default App;
