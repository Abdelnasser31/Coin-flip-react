import React, {Component} from 'react'
// https://i.colnect.net/f/1177/395/25_Pounds.jpg
class Coin extends Component{
    static defaultProps = {
        face: 'https://i.colnect.net/f/1177/396/25-Pounds-back.jpg'
    }
    render() {
        return (<img src={this.props.face} alt="writing" />)
    }
}

export default Coin