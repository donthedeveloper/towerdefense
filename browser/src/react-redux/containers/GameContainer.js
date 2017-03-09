import React from 'react';
import { connect } from 'react-redux';

import Grid from '../components/Grid';

import { moveEnemy } from '../reducers/position';


const GameContainer = (props) => {
  const startWave = () => {
    setInterval(() => props.moveEnemyClicked(0), 1000/16);
    setInterval(() => props.moveEnemyClicked(1), 1000/50);
    setInterval(() => props.moveEnemyClicked(2), 1000/90);
    setInterval(() => props.moveEnemyClicked(3), 1000/160);
    setInterval(() => props.moveEnemyClicked(4), 1000/240);
  }
  
  return (
    <div>
      <Grid enemies={ props.enemies } />
      <div>
        <button onClick={ (e) => startWave() }>Bring It On!</button>
      </div>
    </div>
  );
};

const mapStateToFunctions = (state) => {
  return {
    enemies: state.position.enemies
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