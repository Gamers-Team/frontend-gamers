import React, { Component } from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import { Card, Button } from "react-bootstrap";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
      total: 0,
    };
  }

  getcart = () => {
    let email = this.props.auth0.user.email;
    let url = `http://localhost:3001/cart?email=${email}`;
    axios.get(url).then((result) => {
      let total = 0;
      result.data.forEach((item) => {
        total = total + Number(item.playtime);
      });

      this.setState({
        cartData: result.data,
        total: total,
      });
    });
  };

  deletecart = (idx) => {
    let email = this.props.auth0.user.email;
    let serverURL = process.env.REACT_APP_SERVER;
    let url = `${serverURL}/removecart`;
    let params = {
      email: email,
      index: idx,
    };
    axios.delete(url, { params: params }).then((result) => {
      console.log(result.data);
    });
  };
  

  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <div>
        {isAuthenticated && this.getcart()}
        <h2>{this.state.total} </h2>
        {this.state.cartData.map((item, idx) => {
          return (
            <Card className="editCard" style={{ width: "18rem" }} key={idx}>
              <Card.Img variant="top" src={item.background_image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>

                {Number(item.playtime) ? (
                  <Card.Text>Price : {item.playtime} $ </Card.Text>
                ) : (
                  <Card.Text>Price : 15 $ </Card.Text>
                )}

                <Button variant="primary" onClick={() => this.deletecart(idx)}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default withAuth0(Cart);
