import React, {Component} from 'react';

class GridSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'blue'};

    this.onSquareClick = this.onSquareClick.bind(this);
  }

  onSquareClick() {
    let newColor = this.state.color == 'blue' ? 'red' : 'blue';
    this.setState({color: newColor});
  }

  render() {
    return (
      <div className={`${this.state.color} grid-square`} onClick={this.onSquareClick}></div>
    );
  }
}

export default GridSquare;
