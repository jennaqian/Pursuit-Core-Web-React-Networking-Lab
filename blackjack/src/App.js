import './App.css';
import Menu from "./Components/Menu.js"
import Hand from "./Components/Hand.js"

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>BlackJack</h1>
        <Menu />
        <Hand />
      </div>
    )
  }
}

export default App
