import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Footer.css";
import { Navbar, Container } from 'react-bootstrap';

import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';


export class Footer extends Component {
  render() {
    return (
    <div className='bigdiv'>
      <div className='smaalDiv'>

        <div className='social' style={{ width: '80%' }}>
          <FaFacebook className='anas' />
          <FaTwitter className='anas' />
          <FaYoutube className='anas' />
        </div>
        <div className='foterNavbar'>
          <ol>
            <li>
              <p className='Resources' >Resources</p>
            </li>
            <li>
              <a href="/store" className='link'>Store</a>
            </li>
            <a href="/news" className='link'>News</a>
            <li>
              <a href="/aboutUs" className='link'>About us</a>
            </li>
          </ol>
        </div>

        <div className='copy'>
          <p className='copuright' >
            &copy;2021,  Gamers, Inc. All rights reserved.Gamers , Gamers Games, the Gamers Games logo, Inc. in the Jordan and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Gamers Games International.
          </p>

        </div>




      </div>
      </div>

    );
  }
}

export default Footer;

