import React from 'react';

export default (props) => {
  const cssStyle = {
    position: "absolute",
    top: props.position[1],
    left: props.position[0],
    width: "25px",
    height: "25px",
    backgroundColor: "blue",
    zIndex: "3"
  };

  const cssClass = "tower1Selected";

  return (
    <div className={ cssClass } style={ cssStyle } onClick={ props.toggleSelectedTower } />
  );
}
