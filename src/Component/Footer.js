import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className='maincard'>

        <Card className='maincard' style={{ width: '100%' }}>
          <Card.Img className='imagel' variant="top" src="https://toppng.com/uploads/preview/facebook-black-white-icon-facebook-face-book-png-facebook-icon-for-footer-11562873944v8l8yjbnby.png" />
          <Card.Img className='imagel' variant="top" src="https://i.pinimg.com/originals/20/9b/d8/209bd859c265e7ffc4bfeb75877b23f7.png" />
          <Card.Img className='imagel' variant="top" src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>


      </div>
    );
  }
}

export default Footer;

