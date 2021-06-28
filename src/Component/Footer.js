import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Footer.css";
// import { Button } from "bootstrap";


export class Footer extends Component {
  render() {
    return (
      <div className='bigdiv'>
        <div className='social' style={{ width: '100%' }}>
          <img className='maincard' alt='facebook' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0WyxGuSVbdG_8k5qZ2cbzxR0x20GIOMrN0ZeMtpOZl9ijX7WbN3yLdV0Xk5oa81oXHKQ&usqp=CAU' />
          <img className='maincard' alt='facebook' src='https://toppng.com/public/uploads/preview/twitter-logo-11549680523gyu1fhgduu.png' /><img className='maincard' alt='facebook' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZjx9wTDOfKQT1fOwYgD_D5cVgNYG2idncA&usqp=CAU' />
        </div>

        <div className='copy'>
          <Card className='copuright' style={{ width: '60%' }} bg="dark" variant="dark">
            &copy;2021,  Gamers, Inc. All rights reserved.Gamers , Gamers Games, the Gamers Games logo, Inc. in the Jordan and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Gamers Games International.
          </Card>

        </div>

      </div>

    );
  }
}

export default Footer;

