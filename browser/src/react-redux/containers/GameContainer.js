import React from 'react';
import { connect } from 'react-redux';

import Grid from '../components/Grid';
import Dashboard from '../components/Dashboard';

import { moveEnemy, startWave, addTarget, addProjectile, updateProjectile, addTower } from '../reducers/position';


class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.placeTower = this.props.placeTower;
    this.placeTower = this.placeTower.bind(this);
  }

  tick() {
    this.moveEnemies();
    this.checkForNewTargets();
    this.moveProjectiles();
  }

  moveProjectiles() {
    // loop through projectiles
    this.props.projectiles.forEach((projectile) => {
      if (!projectile.end) {
        setTimeout(() => {
          // console.log('enemies', this.props.enemies);
          const targetCoordinates = this.props.enemies[projectile.target].position;
          // console.log(targetCoordinates);
          this.props.updateProjectile(projectile.id, targetCoordinates);
        }, 1);
        // console.log('enemies', this.props.enemies);
        // const targetCoordinates = this.props.enemies[projectile.target].position;
        // console.log(targetCoordinates);
        // this.props.updateProjectile(projectile.id, targetCoordinates);
      }
    });
      // if end DOES NOT EXIST
        //
  }

  // just find first target in loop and keep as target for now
  checkForNewTargets() {
    this.props.towers.forEach((tower) => {
      if (tower.target) { return }

      const towerX = tower.position[0];
      const towerY = tower.position[1];

      this.props.enemies.forEach((enemy) => {
        const enemyX = enemy.position[0];
        const enemyY = enemy.position[1];

        // console.log('NEW');
        // console.log('TowerX:', tower.id, towerX);
        // console.log('TowerY', tower.id, towerY);
        // console.log('EnemyX', enemy.id, enemyX)
        // console.log('EnemyY:', enemy.id, enemyY);

        if (Math.abs(towerX-enemyX) <= 150 && Math.abs(towerY-enemyY) <= 150) {
          this.props.addTarget(tower.id, enemy.id);
          // console.log(tower.id, enemy.id);
          this.props.addProjectile([towerX, towerY], null, tower.id, enemy.id);
        }
      });
    });
  }

  moveEnemies() {
    if (this.props.enemies[1].position[1] <= 471) {
      this.props.moveEnemy(0);
      this.props.moveEnemy(1);
      this.props.moveEnemy(2);
      this.props.moveEnemy(3);
      this.props.moveEnemy(4);
    }
  }

  componentDidUpdate() {
    if (this.props.started) {
      setTimeout( () => {
        this.tick()
      }, 5000);
    }
  }


  start() {
    this.props.startWave();
    // if (this.props.enemies[1].position[1] < 100) {
      // this.props.moveEnemy(1);
    // }
//     const globalID = requestAnimationFrame(repeatOften);
  }

  render() {
    return (
      <div className="app">
        <Grid
          enemies={ this.props.enemies }
          towers={ this.props.towers }
          grid={ this.props.grid }
          path={ this.props.path }
          projectiles={ this.props.projectiles }
          placeTower={ this.props.placeTower }
        />
        <Dashboard start={ this.start } started={ this.props.started } towers={ this.props.towers } />
      </div>
    );
  }

}

const mapStateToFunctions = (state) => {
  return {
    enemies: state.position.enemies,
    towers: state.position.towers,
    projectiles: state.position.projectiles,
    grid: state.position.grid,
    path: state.position.path,
    started: state.position.started
  }
};

const mapDispatchToFunctions = (dispatch) => {
  return {
    moveEnemy: (index) => {
      dispatch( moveEnemy(index) )
    },
    addTarget: (towerId, enemyId) => {
      dispatch( addTarget(towerId, enemyId) )
    },
    startWave: () => {
      dispatch( startWave() )
    },
    addProjectile: (start, end, towerId, target) => {
      dispatch( addProjectile(start, end, towerId, target) )
    },
    updateProjectile: (projectileId, end) => {
      dispatch( updateProjectile(projectileId, end) )
    },
    placeTower: (coordinates) => {
      dispatch( addTower(coordinates) )
    }
  }
};

export default connect(mapStateToFunctions, mapDispatchToFunctions)(GameContainer);
