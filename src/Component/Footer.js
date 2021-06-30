import React, { Component } from "react";
import logo from "./logo.png";


import "./Footer.css";

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export class Footer extends Component {
  render() {
    return (
      <div>
        {/* <section></section> */}
        <footer className="footer-distributed">
          <div className="footer-left">
            <img alt='g' className="LogoFooter" src={logo} />

            <p className="footer-links">
              <a href="./" className="link-1">
                Home
              </a>

              <a href="/store">Store</a>

              <a href="/news">News</a>

              <a href="/community">Our Community</a>

              <a href="/aboutUs">About us</a>
            </p>

            <p className="footer-company-name">SpaceGames © 2021</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span></span> Amman, Jordan
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+962 777777777</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="mailto:support@company.com">spacegames@company.com</a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-company-about">
              <span></span>
              2021, Gamers, Inc. All rights reserved.Gamers , Gamers Games, the
              Gamers Games logo, Inc. in the Jordan and elsewhere. Other brands
              or product names are the trademarks of their respective owners.
              Non-US transactions through Gamers Games International.
            </p>

            <div className="footer-icons">
              <FaFacebook className="anas" />
              <FaTwitter className="anas" />
              <FaYoutube className="anas" />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
