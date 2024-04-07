import React from 'react'
import img1 from "../../assets/images/image 1.png"
import img2 from "../../assets/images/image 2.png"
import "./content.css"
import Button from '../Button/Button';

const Content = () => {
  return (
    <>
      <div className="wrapper">
        <div className="inner-wrapper">
          <div className="web-details">
            <div className="image">
              <img src={img2} alt="" />
            </div>
            <div className="coontent">
              <h2 className="titels">Web & Mobile App Development</h2>
              <p>
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <Button />
            </div>
          </div>

          <div className="web-details">
            <div className="coontent">
              <h2 className="titels">Digital Strategy Consulting</h2>
              <p>
                Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component
                will never work in isolation and every business needs a
                different mix. We provide a clear concept and strategic overview
                to find the most efficient model for your business.
              </p>
              <Button />
            </div>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content