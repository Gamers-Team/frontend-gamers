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
import Wishlist from "./Pages/Wishlist";
import Cart from './Pages/Cart';
import CardColumns from "react-bootstrap/CardColumns";


export class Main extends Component {
  render() {
    return (
      <div className="main_body">
        <Router>
          <Switch>
            <Route exact path="/">
              <Test />
            </Route>

            <Route path="/store">
              <CardColumns>
                <Store />
              </CardColumns>
            </Route>

            <Route path="/news">
              <News />
            </Route>

            <Route path="/community">
              <Community />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/aboutUs">
              <Aboutus />
            </Route>

            <Route path="/wishlist">
              <Wishlist />
            </Route>
            
            <Route path="/cart">
              <Cart/>
            </Route>

           
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuth0(Main);
