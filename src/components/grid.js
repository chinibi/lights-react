import React from 'react';
import GridSquare from './grid_square';

export default () => {
  return (
    <div id="grid">
      <div className="row">
        <GridSquare key="1" />
        <GridSquare key="2" />
        <GridSquare key="3" />
      </div>
      <div className="row">
        <GridSquare key="4" />
        <GridSquare key="5" />
        <GridSquare key="6" />
      </div>
      <div className="row">
        <GridSquare key="7" />
        <GridSquare key="8" />
        <GridSquare key="9" />
      </div>
    </div>
  );
};
