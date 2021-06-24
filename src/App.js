import React, { Component } from 'react'
import Header from './Component/Header.js'
import Main from './Component/Main.js'
import Footer from './Component/Footer.js'

export class App extends Component {
  render() {
    return (
      <div>

        <Header/>
         <Main/>
        <Footer/> 
        
      </div>
    )
  }
}

export default App
