import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import GamesFromModal from "./GamesFromModal";
import "./Wishlist.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishListData: [],
      item: [],
      photos: [],
      genres: [],
      feedback: [],
      username: [],
      parent_platforms: [],
      showModal: false,
      flage: false,
    };
  }

  ////// form The Data Base

  getFavarite = () => {
    let email = this.props.auth0.user.email;
    let url = `http://localhost:3001/wishlist?email=${email}`;
    axios.get(url).then((result) => {
      this.setState({
        wishListData: result.data,
      });
    });
  };

  delete = (idx) => {
    let email = this.props.auth0.user.email;
    let serverURL = process.env.REACT_APP_SERVER;
    let url = `${serverURL}/remove`;
    let params = {
      email: email,
      index: idx,
    };
    console.log(params);
    axios.delete(url, { params: params }).then((result) => {
      console.log(result.data);
    });
  };

  ////// For Fire the Modle

  showModal = () => {
    this.setState({ showModal: true });
  };

  showGames = (item) => {
    this.setState({
      item: item,
      photos: item.short_screenshots,
      genres: item.genres,
      parent_platforms: item.parent_platforms,
      feedback: item.feedback,
      username: item.username,
    });
    this.showModal();
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <div>
        {isAuthenticated && this.getFavarite()}

        
          <p className="editWishlistHeader"> My WishList ♥️</p>
        

        <Row xs={1} md={3} className="g-4" className="editRowCard">
          {this.state.wishListData.map((item, idx) => {
            return (
              <Col>
                <Card style={{ width: "20rem" }} className="wishlistStyle">
                  <Card.Body>
                    <>
                      <button
                        className="wishlist_removeButton"
                        variant="outline-dark"
                        onClick={() => this.delete(idx)}
                      >
                        ✖️
                      </button>
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <div className="flip-card-back">
                              <img
                                src={item.background_image}
                                style={{ width: 300, height: 300 }}
                              />
                            </div>
                            <h1 className="editNameGame">{item.name}</h1>
                          </div>
                        </div>
                      </div>
                    </>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <GamesFromModal
          show={this.state.showModal}
          closeFunc={this.closeModal}
          item={this.state.item}
          photos={this.state.photos}
          genres={this.state.genres}
          parent_platforms={this.state.parent_platforms}
          feedback={this.state.feedback}
          username={this.state.username}
          flage={this.state.flage}
        />
      </div>
    );
  }
}

export default withAuth0(Wishlist);
