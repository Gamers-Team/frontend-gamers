import Commits from "./Commits";
import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart } from "react-icons/all";
import { withAuth0 } from "@auth0/auth0-react";
import "./GamesFromModal.css";

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

  
  getfeedback = (feed) => {
    console.log(feed);
    this.setState({
      feedflage: true,
      username: feed.username,
      feedback: feed.feedback,
    });
    
    console.log('testssss');
  };

  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <div className="divModal">
        <Modal show={this.props.show} onHide={this.props.closeFunc}>
          <Modal.Header closeButton>
            <Modal.Title className="modalTitle">
              {this.props.item.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="editModal">
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
              <div className="vl"></div>

              <Card.Body className="editBodyCard1">
                <Card.Text>
                  Genres : {this.props.genres.map((thing) => thing + " ")}
                </Card.Text>
                <Card.Text>
                  Description :<br />
                  This game released on {this.props.item.released}, And its last
                  update was in {this.props.item.updated}. <br />
                  This game plateforms is:
                  {this.props.parent_platforms.map((thing) => thing + " ")}
                </Card.Text>

                {this.props.flage && isAuthenticated && (
                  <Card.Text className="editwishlistText">
                    Add To Wishlist
                    <Button variant="outline-dark" className="FavHeart">
                      <FaHeart
                        onClick={() => this.AddToList(this.props.item)}
                      />
                    </Button>
                  </Card.Text>
                )}

                {this.props.flage && (
                  <>
                    <div className="feedBackBox">
                      <Card.Title>
                        <p className="feedbackTitle">FeedBacks 📜</p>
                        <Card.Text className="editfeedbackText">Most Recent FeedBack </Card.Text>
                        <Card.Text className="editfeedbackText">Name :{this.state.username} </Card.Text>
                        <Card.Text className="editfeedbackText">FeedBack :  {this.state.feedback} </Card.Text>
                      </Card.Title>

                      {this.props.username.map((item, idx) => {
                        return (
                          <Card.Body key={idx} className="editfeedbackText">
                            <Card.Text>Name : {item} </Card.Text>
                            <Card.Text>
                              FeedBack : {this.props.feedback[idx]}{" "}
                            </Card.Text>
                          </Card.Body>
                        );
                      })}
                    </div>
                  </>
                )}
              </Card.Body>
            </Card>

            {this.props.flage && (
              <Commits
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
