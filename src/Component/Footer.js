import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Footer.css";
import { FaFacebookSquare, FaYoutubeSquare, FaTwitterSquare } from 'react-icons/fa';


export class Footer extends Component {
  render() {
    return (
      <div >
        <div className='social'>
          <FaFacebookSquare className='maincard' />
          <FaYoutubeSquare className='maincard' />
          <FaTwitterSquare className='maincard' />
        </div>


        <Card style={{ width: '100%' }}>
          Hello world
        </Card>

      </div>

    );
  }
}

export default Footer;

