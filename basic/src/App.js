import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Welcome to the fusion restaurant!!!</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
       <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
