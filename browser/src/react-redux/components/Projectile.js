import React from 'react';

export default (props) => {
  const x = (props.end) ? props.end[0] : props.start[0];
  const y = (props.end) ? props.end[1] : props.start[1];

  // if (props.end) {
  //   const x = props.start[0];
  //   const y = props.start[1];
  // }

  const cssStyle = {
    position: "absolute",
    top: `${y}px`,
    left: `${x}px`,
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
