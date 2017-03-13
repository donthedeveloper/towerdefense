import React from 'react';

import Enemy from './Enemy';
import Tower from './Tower';
import Rectangle from './Rectangle';
import Projectile from './Projectile';

export default (props) => {

  const cssStyle = {
    position: "relative",
    width: props.grid.width + "px",
    height: props.grid.height + "px",
    backgroundColor: "green"
  };

  return (
    <div className="grid" style={ cssStyle }>
      {/* PATH */}
      { props.path.map((rectangle, index) =>
          <Rectangle key={ index } rectangle={ rectangle } />
      ) }

      {/* ENEMIES */}
      { props.enemies.map((enemy) =>
          <Enemy
            key={ enemy.id }
            id={ enemy.id }
            destination={ enemy.destination }
            delayInSeconds={ enemy.delayInSeconds }
          />
      ) }

      {/* TOWERS */}
      { props.towers.map((tower) =>
          <Tower key={ tower.id } id={ tower.id } position={ tower.position } />
      ) }

      {/* PROJECTILES */}
      { props.projectiles.map((projectile) =>
          <Projectile
            key={ projectile.id }
            id={ projectile.id }
            start={ projectile.start }
            end={ projectile.end }
          />
      ) }
    </div>
  );
}
