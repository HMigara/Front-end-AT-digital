import React, { useState } from 'react'
import "./navbar.css"
import menuIcon from "../../../assets/images/menuIcon.png";
import close from "../../../assets/images/close.png";
import logo from "../../../assets/images/Logo.png";

const Navbar = () => {

  const  [isActive,setIsActive]= useState(false);

  return (
    <>
      <nav>
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <ul>
          <li>
            <a href="#">SERVICES</a>
          </li>

          <li>
            <a href="#">ABOUT US</a>
          </li>

          <li>
            <a href="#">CONTACT US</a>
          </li>

          <li>
            <a href="#">CAREERS</a>
          </li>
        </ul>
        <div onClick={()=> setIsActive(true)} className="menu-icon">
          <img src={menuIcon} alt="" />
        </div>
      </nav>

      <div className={`mobile-menu-container ${isActive ? "active" : ""}`} >
        <div onClick={()=> setIsActive(false)} className="close-icon">
          <img src={close} alt="" />
        </div>
        <ul className='menu-items'>
          <li>
            <a href="#">SERVICES</a>
          </li>

          <li>
            <a href="#">ABOUT US</a>
          </li>

          <li>
            <a href="#">CONTACT US</a>
          </li>

          <li>
            <a href="#">CAREERS</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;