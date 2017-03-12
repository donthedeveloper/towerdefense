import React from 'react';

export default (props) => {
  const cssStyle = {
    position: "absolute",
    // top: `${props.destination[1]}px`,
    // left: `${props.destination[0]}px`,
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    backgroundColor: "white",
    transition: "all 1s linear",
    // transitionDelay: props.delayInSeconds,
    zIndex: "3"
  };

  return (
    <div style={ cssStyle } />
  );
}
