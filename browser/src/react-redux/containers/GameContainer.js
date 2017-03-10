import React from 'react';
import { connect } from 'react-redux';

import Grid from '../components/Grid';

import { moveEnemy } from '../reducers/position';


const GameContainer = (props) => {
  const repeatOften = () => {
    const globalId = requestAnimationFrame(repeatOften);
      props.moveEnemyClicked(0);
      setTimeout(() => {
        props.moveEnemyClicked(1)
      }, 3000);
      setTimeout(() => {
        props.moveEnemyClicked(2)
      }, 7000);
//       props.moveEnemyClicked(2);
//       props.moveEnemyClicked(3);
//       props.moveEnemyClicked(4);
  };
  
  const startWave = () => {
    const globalID = requestAnimationFrame(repeatOften);
  }
  
  return (
    <div>
      <Grid enemies={ props.enemies } grid={ props.grid } path={ props.path } />
      <div>
        <button onClick={ (e) => startWave() }>Bring It On!</button>
      </div>
    </div>
  );
};

const mapStateToFunctions = (state) => {
  return {
    enemies: state.position.enemies,
    grid: state.position.grid,
    path: state.position.path
  }
};

const mapDispatchToFunctions = (dispatch) => {
  return {
    moveEnemyClicked: (index) => {
      dispatch( moveEnemy(index) )
    }
  }
};

export default connect(mapStateToFunctions, mapDispatchToFunctions)(GameContainer);