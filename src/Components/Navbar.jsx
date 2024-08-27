import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/Logopo.png';
import './Navbar.css';


function Navbar(){
    return(
        <nav class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold text-light" href="#">
      <img src={logo} alt="Logo" width="32" height="30" class="d-inline-block align-text-top" />
      Logic Waves
    </a>
  </div>
</nav>
    )
}

export default Navbar;