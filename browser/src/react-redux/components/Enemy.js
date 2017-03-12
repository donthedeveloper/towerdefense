import React from 'react';

export default (props) => {
  const cssStyle = {
    position: "absolute",
    top: `${props.destination[1]}px`,
    left: `${props.destination[0]}px`,
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    backgroundColor: "red",
    transition: `all 32.25s linear ${props.delayInSeconds}s`,
    // transitionDelay: props.delayInSeconds,
    zIndex: "2"
  };

  return (
    <div style={ cssStyle } />
  );
}
