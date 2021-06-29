import Commits from "./Commits";
import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Card } from "react-bootstrap";
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
    feedflage: false,
    username: "",
    feedback: "",
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

  updata = (object) => {
    this.setState({
      feedflage: true,
      username: object.username,
      feedback: object.feedback,
    });
  };
  getfeedback = (feed) => {};

  render() {
    const { isAuthenticated } = this.props.auth0;

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
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Genres : {this.props.genres.map((thing) => thing + " ")}
                </Card.Text>
                <Card.Text>
                  This game released on {this.props.item.released}, The last
                  update was in {this.props.item.updated}, game plateforms{" "}
                  {this.props.parent_platforms.map((thing) => thing + " ")}
                </Card.Text>


                {this.props.flage && isAuthenticated && (
                  <Card.Text>
                    Add To Wishlist <br />
                    <Button variant="outline-dark" className="FavHeart">
                      <FaHeart
                        onClick={() => this.AddToList(this.props.item)}
                      />
                    </Button>
                  </Card.Text>
                // eslint-disable-next-line react/jsx-no-comment-textnodes
                )}




                {this.props.flage && (
                  <>
                    <Card.Body>
                      <Card.Text>{this.state.username} </Card.Text>
                      <Card.Text> {this.state.feedback} </Card.Text>
                    </Card.Body>
                    {this.props.username.map((item, idx) => {
                      return (
                        <Card
                          className="editCard"
                          style={{ width: "18rem" }}
                          key={idx}
                        >
                          <Card.Body>
                            <Card.Text> {item} </Card.Text>
                            <Card.Text> {this.props.feedback[idx]} </Card.Text>
                          </Card.Body>
                        </Card>
                      );
                    })}
                  </>
                )}
              </Card.Body>
            </Card>


            {this.props.flage && (
              <Commits
                updata={this.updata}
                getfeedback={this.getfeedback}
                id={this.props.item.id}
              />
            )}


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeFunc}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default withAuth0(GamesFromModal);
