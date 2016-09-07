import React from 'react';

export default props => {
  return (
    <div className={`${props.color} grid-square`} onClick={props.onClick}></div>
  );
}
