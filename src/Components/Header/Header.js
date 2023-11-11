import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
            <img className='header-logo' src={logo} width="100" height="40" alt="" />
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto p">
                        <li class="nav-item">
                            <a class="nav-link mx-3" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link mx-3" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link mx-3" href="#">Shoes</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link mx-3" href="#">Bags</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link mx-3" href="#">Others</a>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
   
  );
};

export default Header;