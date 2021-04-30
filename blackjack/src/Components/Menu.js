import React, { Component } from 'react'
import axios from "axios"

export class Menu extends Component {
    constructor(){
        super()

        this.state = {
            deck: [],
        }
    }

    getDeck = () => {
        axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(response => {
            
        })
    }

    render() {
        return (
            <div>
                <button>Generate Deck</button>
                <label>Input Existing Deck</label>
                <input type="text"></input>
                <button onClick={this.getDeck()}>Draw</button>
            </div>
        )
    }
}

export default Menu;
