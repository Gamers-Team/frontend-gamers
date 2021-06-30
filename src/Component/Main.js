import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "./Test";

import "./Main.css";
import Community from "./Pages/Community";
import News from "./Pages/News";
import Store from "./Pages/Store";
import Profile from "./user/Profile";
import Aboutus from "./Pages/Aboutus";
import Home from "./Pages/Home";

import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import CardColumns from "react-bootstrap/CardColumns";

export class Main extends Component {
  render() {
    return (
      <div className="main_body">
        <Router>
          <Route exact path="/">
            <Test />
            <Home />
          </Route>

          <Route exact path="/store">
            <CardColumns>
              <Store />
            </CardColumns>
          </Route>

          <Route exact path="/news">
            <News />
          </Route>

          <Route exact path="/community">
            <Community />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/aboutUs" component={Aboutus}></Route>

          {/* <Route exact path="/aboutUs">
            <Aboutus />
          </Route> */}

          <Route exact path="/wishlist">
            <Wishlist />
          </Route>
          <Route exact path="/logout">
            <Home />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>
        </Router>
      </div>
    );
  }
}

export default withAuth0(Main);
