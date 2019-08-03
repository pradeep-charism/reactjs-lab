import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap'

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">React Lab and Practice Workspace</NavbarBrand>
        </div>
      </Navbar>
       <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
