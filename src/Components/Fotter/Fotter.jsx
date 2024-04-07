import React from 'react'
import logo from "../../assets/images/Logo.png"
import "./fotter.css";

const Fotter = () => {
  return (
    <>
      <footer>
        <div className="wrapperr">
          <div className="footer-wrapper">
            <div className="logo-link">
              <div className="link">
                <a href="#">
                  <img src={logo} alt="" />
                </a>

                <p>
                  Your goal is our target. Not anything in between. We use
                  online marketing platforms and tools to achieve single
                  objective - your business results.
                </p>
              </div>

              <div className="set">
                <div className="dtls-link">
                  <h3>Our Technologies</h3>
                  <ul>
                    <li>
                      <a href="#">ReactJS</a>
                    </li>

                    <li>
                      <a href="#">Gatsby</a>
                    </li>

                    <li>
                      <a href="#">NextJS</a>
                    </li>

                    <li>
                      <a href="#">NodeJS</a>
                    </li>
                  </ul>
                </div>

                <div className="dtls-link">
                  <h3>Our Services</h3>

                  <ul>
                    <li>
                      <a href="#">Social media Marketing</a>
                    </li>

                    <li>
                      <a href="#">Web & Mobile App Development</a>
                    </li>

                    <li>
                      <a href="#">Data & Analytics</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="setmob">
              <div className="dtls-link">
                <h3>Our Technologies</h3>
                <ul>
                  <li>
                    <a href="#">ReactJS</a>
                  </li>

                  <li>
                    <a href="#">Gatsby</a>
                  </li>

                  <li>
                    <a href="#">NextJS</a>
                  </li>

                  <li>
                    <a href="#">NodeJS</a>
                  </li>
                </ul>
              </div>

              <div className="dtls-link">
                <h3>Our Services</h3>

                <ul>
                  <li>
                    <a href="#">Social media Marketing</a>
                  </li>

                  <li>
                    <a href="#">Web & Mobile App Development</a>
                  </li>

                  <li>
                    <a href="#">Data & Analytics</a>
                  </li>
                </ul>
              </div>
            </div>

            <hr />
            <p className="privarcy">Privacy Policy | Terms & Conditions </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Fotter