import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "./Test";
import "./Main.css";
import Community from "./Pages/Community";
import News from "./Pages/News";
import Store from "./Pages/Store";
import LogoutButton from "./user/LogoutButton";
import Profile from './user/Profile';

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
              <Store />
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
            <Route path="/logout">
              <LogoutButton />
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuth0(Main);
