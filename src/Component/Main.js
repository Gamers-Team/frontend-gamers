import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "./Test";
import Home from "./Home";

import "./Main.css";
import Community from "./Pages/Community";
import News from "./Pages/News";
import Store from "./Pages/Store";
import LogoutButton from "./user/LogoutButton";
import Profile from './user/Profile';
import Aboutus from "./Pages/Aboutus";


export class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }


  }
  componentDidMount() {
    this.getPictures()
  }
  getPictures = () => {
    let serverUrl = process.env.React_APP_SERVER
    let url=

  }



  render() {
    return (
      <div className="main_body">
        <Router>
          <Switch>
            <Route exact path="/">
              <Test />
              <Home />
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

            <Route path="/aboutUs">
              <Aboutus />
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
