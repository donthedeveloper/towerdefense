import React from 'react';

import Enemy from './Enemy';
import Rectangle from './Rectangle';

export default (props) => {
  
  const cssStyle = {
    position: "relative",
    width: props.grid.width + "px",
    height: props.grid.height + "px",
    backgroundColor: "green"
  };
  
  return (
    <div style={ cssStyle }>
      { props.path.map((rectangle, index) =>
          <Rectangle key={ index } rectangle={ rectangle } />
      ) }
    
      { props.enemies.map((enemy) =>
          <Enemy key={ enemy.id } id={ enemy.id } position={ enemy.position } />
      ) }
    </div>
  );
}