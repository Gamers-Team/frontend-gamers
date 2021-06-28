import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Footer.css";
import { FaFacebookSquare, FaYoutubeSquare, FaTwitterSquare } from 'react-icons/fa';
import { Button } from "bootstrap";


export class Footer extends Component {
  render() {
    return (
      <div >
        <div className='social' style={{ width: '100%' }}>
          <FaFacebookSquare className='maincard' type={Button}/>
          <FaYoutubeSquare className='maincard' type={Button} />
          <FaTwitterSquare className='maincard' type={Button}/>
        </div>

       <div className='copy'>
        <Card style={{ width: '100%' }}bg="dark" variant="dark">
        &copy;2021,  Gamers, Inc. All rights reserved.Gamers , Gamers Games, the Gamers Games logo, Inc. in the Jordan and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Gamers Games International,    
        </Card>  

        </div>

      </div>

    );
  }
}

export default Footer;

