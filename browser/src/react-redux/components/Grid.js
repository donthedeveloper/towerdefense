import React from 'react';

import Enemy from './Enemy';

export default (props) => {
  console.log(props);
  
  const cssStyle = {
    position: "relative",
    width: props.grid.width,
    height: props.grid.height,
    backgroundColor: "blue"
  };
  
  return (
    <div style={ cssStyle }>
      { props.enemies.map((enemy) =>
          <Enemy key={ enemy.id } id={ enemy.id } position={ enemy.position } />
      ) }
    </div>
  );
}