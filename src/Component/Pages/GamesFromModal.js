import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart } from "react-icons/all";
import { withAuth0 } from "@auth0/auth0-react";

import axios from "axios";

class GamesFromModal extends Component {
  // check() {
  //   console.log(this.props.item);
  // }

  state = {
    data: [],
  };

  AddToList(item) {
    let serverURL = process.env.REACT_APP_SERVER;
    let url = `${serverURL}/addTowishList`;
    let email = this.props.auth0.user.email;
    item["email"] = email;
    console.log(item);
    axios
      .post(url, item)
      .then((result) => {
        this.setState({ data: result.data });
      })
      .catch((err) => {
        this.setState({ err: "there is an error" });
      });
  }

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.closeFunc}>
          {/* {this.props.show && this.check()} */}
          <Modal.Header closeButton>
            <Modal.Title>{this.props.item.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel>
              {this.props.photos.map((item, idx) => {
                return (
                  <Carousel.Item key={idx}>
                    <img
                      className="d-block w-100"
                      src={item}
                      alt="First slide"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <p>Genres : {this.props.item.genres}</p>
            <p>
              This game released on {this.props.item.released}, The last update
              was in {this.props.item.updated}, game plateforms{" "}
              {this.props.item.parent_platforms}
            </p>
            <p>
              Add To Wishlist
              <FaHeart onClick={() => this.AddToList(this.props.item)} />{" "}
            </p>
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
export default withAuth0(GamesFromModal);
