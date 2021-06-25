import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "./Test";
import "./Main.css";
import Community from "./Pages/Community";
import News from "./Pages/News";
import Store from "./Pages/Store";

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
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
