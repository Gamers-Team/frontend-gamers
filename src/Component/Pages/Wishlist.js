import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

export class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishListData: [],
    };
  }

  getFavarite = () => {
    let email = this.props.auth0.user.email;
    let url = `http://localhost:3001/wishlist?email=${email}`;
    axios.get(url).then((result) => {
      this.setState({
        wishListData: result.data,
      });
    });
  };

  // deletegame=(idx)=>{
  //     console.log(idx);
  // }

  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <div>
        {isAuthenticated && this.getFavarite()}
        {this.state.wishListData.map((item, idx) => {
          return (
            <Card className="editCard" style={{ width: "18rem" }} key={idx}>
              <Card.Img variant="top" src={item.background_image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Rating: {item.rating} /5</Card.Text>
                <Card.Text>Ratings Count: {item.ratings_count} </Card.Text>
                <Card.Text>Price : {item.playtime} $ </Card.Text>
                <Button variant="primary" onClick={() => this.showGames(item)}>
                  More...
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default withAuth0(Wishlist);
