import React from 'react';

export default (props) => {
  const cssStyle = {
    position: "absolute",
    backgroundColor: "brown",
    left: props.rectangle.left + "px",
    top: props.rectangle.top + "px",
    width: props.rectangle.width + "px",
    height: props.rectangle.height + "px",
    zIndex: "1"
  }

  return(
    <div style={ cssStyle } />
  );
}
