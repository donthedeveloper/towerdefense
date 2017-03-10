import React from 'react';

export default (props) => {
  const cssStyle = {
    position: "absolute",
    backgroundColor: "brown",
    left: props.rectangle.left,
    top: props.rectangle.top,
    width: props.rectangle.width + "px",
    height: props.rectangle.height + "px",
    zIndex: "1"
  }
  
  return(
    <div style={ cssStyle } />
  );
}