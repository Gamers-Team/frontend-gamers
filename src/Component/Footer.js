import React, { Component } from "react";
import logo from "./logo.png";


import "./Footer.css";

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export class Footer extends Component {
  render() {
    return (
      <div>
        {/* <section></section> */}
        <footer class="footer-distributed">
          <div class="footer-left">
            <img className="LogoFooter" src={logo} />

            <p class="footer-links">
              <a href="./" class="link-1">
                Home
              </a>

              <a href="/store">Store</a>

              <a href="/news">News</a>

              <a href="/community">Our Community</a>

              <a href="/aboutUs">About us</a>
            </p>

            <p class="footer-company-name">SpaceGames © 2021</p>
          </div>

          <div class="footer-center">
            <div>
              <i class="fa fa-map-marker"></i>
              <p>
                <span></span> Amman, Jordan
              </p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>+962 777777777</p>
            </div>

            <div>
              <i class="fa fa-envelope"></i>
              <p>
                <a href="mailto:support@company.com">spacegames@company.com</a>
              </p>
            </div>
          </div>

          <div class="footer-right">
            <p class="footer-company-about">
              <span></span>
              2021, Gamers, Inc. All rights reserved.Gamers , Gamers Games, the
              Gamers Games logo, Inc. in the Jordan and elsewhere. Other brands
              or product names are the trademarks of their respective owners.
              Non-US transactions through Gamers Games International.
            </p>

            <div class="footer-icons">
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
