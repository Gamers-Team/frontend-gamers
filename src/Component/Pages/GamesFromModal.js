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
    axios.post(url, item).then((result) => {
      // console.log(result.data);
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
            <p>ABOUT THIS GAME</p>

            <p>Genres : {this.props.genres.map((thing) => thing + " ")}</p>
            <p>
              This game released on {this.props.item.released}, The last update
              was in {this.props.item.updated}, game plateforms{" "}
              {this.props.parent_platforms.map((thing) => thing + " ")}
            </p>

            {this.props.flage && (
              <p>
                Add To Wishlist <br />
                <Button variant="outline-dark" classNAme="FavHeart" >
                  <FaHeart  onClick={() => this.AddToList(this.props.item)} />
                </Button>
              </p>
            )}
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
