import React from 'react';

import Enemy from './Enemy';

export default (props) => {
  const cssStyle = {
    position: "relative",
    width: "500px",
    height: "500px",
    backgroundColor: "blue"
  };
  
  return (
    <div style={ cssStyle }>
      { props.enemies.map((enemy) =>
          <Enemy id={ enemy.id } position={ enemy.position } />
      ) }
    </div>
  );
}