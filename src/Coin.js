import React, {Component} from 'react'
// https://i.colnect.net/f/1177/395/25_Pounds.jpg
class Coin extends Component {
  static defaultProps = {
    image: 'https://i.colnect.net/f/1177/396/25-Pounds-back.jpg'
  }
  render() {

    return (
      <div>
        <img src={this.props.info.imgSrc} alt={this.props.info.side}/>
      </div>
    )
  }
}

export default Coin