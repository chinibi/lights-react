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
}
