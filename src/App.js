import React, { Component } from 'react'
import Header from './Component/Header.js'
import Main from './Component/Main.js'
import Footer from './Component/Footer.js'
import { withAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';



export class App extends Component {
  render() {
    return (
      <div>

        <Header />
        <Main />
        <Footer />

      </div>
    )
  }
}

export default withAuth0(App)
