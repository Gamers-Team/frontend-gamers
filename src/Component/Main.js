import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from './Test';
import './Main.css'
export class Main extends Component {
    render() {
        return (
            <div className="main_body">
                <Router>
              <Switch>
                <Route exact path="/features">
                <Test/>

                </Route>
              </Switch>
              </Router>
            </div>
        )
    }
}

export default Main
