import React, { Component } from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import { Card, Button } from "react-bootstrap";
import "./Cart.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <div className={"cart_page"}>
        {isAuthenticated && this.getcart()}

        <p className="cartTitle"> Shopping Cart 🛒 </p>

        {this.state.cartData.map((item, idx) => {
          return (
            <>
              <div className="editDataInCart">
                <Container>
                  <Row md={4} className="editrow">
                    <Col>
                      <img src={item.background_image} />
                    </Col>
                    <Col xs={6} className="containerCart">
                      {item.name}
                    </Col>
                    <Col className="containerCartPrice">
                      {Number(item.playtime) ? (
                        <h3>{item.playtime}$ </h3>
                      ) : (
                        <h3>15 $</h3>
                      )}
                    </Col>
                    <Col>
                      <Button
                        className={"cart_removeButton"}
                        variant="secondary"
                        onClick={() => this.deletecart(idx)}
                        active
                      >
                        ✖️
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </div>
            </>
          );
        })}
        <hr />
        <p className="Total-cart" >TOTAL = {this.state.total}$</p>
      </div>
    );
  }
}

export default withAuth0(Cart);
