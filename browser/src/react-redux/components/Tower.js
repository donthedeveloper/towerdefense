import React from 'react';

export default (props) => {
  const cssStyle = {
    position: "absolute",
    top: props.position[1],
    left: props.position[0],
    width: "25px",
    height: "25px",
    backgroundColor: "blue",
    zIndex: "2"
  };

  return (
    <div style={ cssStyle } />
  );
}
