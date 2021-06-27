import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

export default class GamesFromModal extends Component {
 
 check(){
  console.log(this.props.item);

 }
 
  render() {
    
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.closeFunc}>
        {this.props.show&&this.check()}
          <Modal.Header closeButton>
            <Modal.Title>{this.props.item.name }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel>
            {this.props.photos.map((item) => {
              return(
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{this.props.item.name}</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              )
            })}
{/*             
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={this.props.photos[0]}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item> */}

            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeFunc}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
