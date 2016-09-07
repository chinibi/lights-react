import React, {Component} from 'react';
import GridSquare from './grid_square';

export default class Grid extends Component {
  constructor() {
    super();
    const initialState = 'blue';

    this.state = {colors: [
      ['blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue']
    ]};
  }

  onSquareClick(i, j) {
    let newColors = this.state.colors;
    newColors[i][j] = newColors[i][j] == 'blue' ? 'red' : 'blue';
    this.setState({colors: newColors});
  }

  render() {
    return (
      <div id="grid">
        {
          this.state.colors.map((row, i) => {
            return (
              <div key={`row${i}`} className="row">
                {
                  row.map((square, j) => {
                    return (
                      <GridSquare key={`${i}${j}`} color={this.state.colors[i][j]} onClick={this.onSquareClick.bind(this, i, j)} />
                    );
                  }, this)
                }
              </div>
            );
          }, this)
        }
      </div>
    );
  }

  // render() {
  //   return (
  //     <div id="grid">
  //       <div className="row">
  //         <GridSquare key="0" onClick={this.onSquareClick.bind(this, 0)} color={this.state.colors[0]} />
  //         <GridSquare key="1" onClick={this.onSquareClick.bind(this, 1)} color={this.state.colors[1]} />
  //         <GridSquare key="2" onClick={this.onSquareClick.bind(this, 2)} color={this.state.colors[2]}/>
  //       </div>
  //       <div className="row">
  //         <GridSquare key="3" onClick={this.onSquareClick.bind(this, 3)} color={this.state.colors[3]} />
  //         <GridSquare key="4" onClick={this.onSquareClick.bind(this, 4)} color={this.state.colors[4]} />
  //         <GridSquare key="5" onClick={this.onSquareClick.bind(this, 5)} color={this.state.colors[5]} />
  //       </div>
  //       <div className="row">
  //         <GridSquare key="6" onClick={this.onSquareClick.bind(this, 6)} color={this.state.colors[6]} />
  //         <GridSquare key="7" onClick={this.onSquareClick.bind(this, 7)} color={this.state.colors[7]} />
  //         <GridSquare key="8" onClick={this.onSquareClick.bind(this, 8)} color={this.state.colors[8]} />
  //       </div>
  //     </div>
  //   );
  // }
}
