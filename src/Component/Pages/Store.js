import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

import GamesFromModal from "./GamesFromModal";

export class Store extends Component {
  state = {
    gamesData: [],
    error: "",
    showModal: false,
  };

  componentDidMount() {
    this.getGamesInfo();
  }

  getGamesInfo = () => {
    let serverURL = process.env.REACT_APP_SERVER;
    let url = `${serverURL}/games`;

    axios
      .get(url)
      .then((data) => {
        this.setState({ gamesData: data.data, error: "" });
      })
      .catch((error) => {
        this.setState({ error: "THERE IS AN ERROR" });
      });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        {typeof this.state.gamesData == "string" ? (
          <p>{this.state.gamesData}</p>
        ) : (
          <div>
            {this.state.gamesData.map((item) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.background_image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Released: {item.released}</Card.Text>
                    <Card.Text>Rating: {item.rating}</Card.Text>
                    <Card.Text>Ratings Count: {item.ratings_count}</Card.Text>
                    <Card.Text>Updated: {item.updated}</Card.Text>
                    <Card.Text>Price : {item.playtime}</Card.Text>
                    <Card.Text>Platforms:  {item.parent_platforms}</Card.Text>
                    <Card.Text>Genres:  {item.genres}</Card.Text>
                    <Button variant="primary" onClick={this.showModal}>
                      Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}

            <GamesFromModal
              show={this.state.showModal}
              closeFunc={this.closeModal}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withAuth0(Store);
