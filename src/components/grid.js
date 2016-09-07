import React, {Component} from 'react';
import GridSquare from './grid_square';

export default class Grid extends Component {
  constructor() {
    super();
    const initialState = 'blue';

    this.state = {colors: [
      ['blue', 'blue', 'blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue', 'blue', 'blue']
    ]};
  }

  onSquareClick(i, j) {
    let newColors = this.state.colors;
    newColors[i][j] = newColors[i][j] == 'blue' ? 'red' : 'blue';
    if (i !== 0)                      newColors[i-1][j] = newColors[i-1][j] == 'blue' ? 'red' : 'blue';
    if (i !== newColors[i].length-1)  newColors[i+1][j] = newColors[i+1][j] == 'blue' ? 'red' : 'blue';
    if (j !== 0)                      newColors[i][j-1] = newColors[i][j-1] == 'blue' ? 'red' : 'blue';
    if (j !== newColors.length-1)     newColors[i][j+1] = newColors[i][j+1] == 'blue' ? 'red' : 'blue';
    
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
