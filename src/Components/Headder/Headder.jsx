import React from 'react'
import "./headder.css";
// import background from "../../assets/images/Hero.png"
import Navbar from './Navbar/Navbar';
import Button from '../Button/Button';

const Headder = () => {
  return (
    <>
      <Navbar />
      <header>
        <div className="wrapper">
          <div className="cta">
            <h3 className="details">
              We crush your competitors, goals, <br/>and sales records - without the
              B.S.
            </h3>
            <Button />
          </div>
        </div>
      </header>
    </>
  );
}

export default Headder