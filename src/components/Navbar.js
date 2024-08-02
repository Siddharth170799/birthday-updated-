


import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar" >
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Raaga Sreeja</a></li>
        <li ><a href='/video'>Video</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
