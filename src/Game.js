import React, { Component } from 'react'
import Coin from './Coin';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attempts: 0,
            totalHeads: 0,
            totalTails: 0,
            coinFace: null,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    static defaultProps = {
        coins: [{side:'Head', imgSrc: 'https://i.colnect.net/f/1177/396/25-Pounds-back.jpg'},
                {side: 'Tail', imgSrc: 'https://i.colnect.net/f/1177/395/25_Pounds.jpg'}]
    }
    handleClick() {
        this.flipCoin();
    }
    flipCoin() {
        let newCoin = this.props.coins[Math.floor(Math.random() * 2)];
        this.setState(st => {
            return {
                ...st,
                coinFace: newCoin,
                attempts: st.attempts + 1,
                totalHeads: st.totalHeads + (newCoin.side === 'Head' ? 1 : 0),
                totalTails: st.totalTails + (newCoin.side === 'Tail' ? 1 : 0),
            }
        });
    }
    render() {
        let result = `Out of ${this.state.attempts} flips,there have been ${this.state.totalHeads} heads and ${this.state.totalTails} tails.`
        return (
            <div>
                <h1>Let's flip a coin!</h1>

               {this.state.coinFace &&  <Coin info={this.state.coinFace}/>}


                <button onClick = {this.handleClick}>Flip ME!!!</button>


                <p>{result}</p>
            </div>
        )
    }
}
