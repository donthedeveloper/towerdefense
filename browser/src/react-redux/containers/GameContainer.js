import React from 'react';
import { connect } from 'react-redux';

import Grid from '../components/Grid';

import { moveEnemy } from '../reducers/position';


const GameContainer = (props) => {
  const repeatOften = () => {
    const globalId = requestAnimationFrame(repeatOften);
      props.moveEnemyClicked(0);
      props.moveEnemyClicked(1);
      props.moveEnemyClicked(2);
      props.moveEnemyClicked(3);
      props.moveEnemyClicked(4);
  };
  
  const startWave = () => {
    const globalID = requestAnimationFrame(repeatOften);
    
//     setInterval(() => {
//       props.moveEnemyClicked(0);
//       props.moveEnemyClicked(1);
//       props.moveEnemyClicked(2);
//       props.moveEnemyClicked(3);
//       props.moveEnemyClicked(4);
//     }, 1000/16);
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