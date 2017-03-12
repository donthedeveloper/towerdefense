import React from 'react';

import Enemy from './Enemy';
import Tower from './Tower';
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
      {/* PATH */}
      { props.path.map((rectangle, index) =>
          <Rectangle key={ index } rectangle={ rectangle } />
      ) }

      {/* ENEMIES */}
      { props.enemies.map((enemy) =>
          <Enemy key={ enemy.id } id={ enemy.id } position={ enemy.position } />
      ) }

      {/* TOWERS */}
      { props.towers.map((tower) =>
          <Tower key={ tower.id } id={ tower.id } position={ tower.position } />
      ) }
    </div>
  );
}
