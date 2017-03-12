import React from 'react';
import { connect } from 'react-redux';

import Grid from '../components/Grid';

import { moveEnemy, startWave } from '../reducers/position';


class GameContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  tick() {
    if (this.props.enemies[1].position[1] < 100) {
      this.props.moveEnemy(1);
    }
  }
  
  componentDidUpdate() {
    console.log('this is triggered');
    if (this.props.started) {
      setTimeout( () => {
        this.tick()
      }, 16);
    }
  }
  
  
  
  
  
  start() {
    this.props.startWave();
    if (this.props.enemies[1].position[1] < 100) {
      this.props.moveEnemy(1);
    }
//     const globalID = requestAnimationFrame(repeatOften);
  }
  
  render() {
    return (
      <div>
        <Grid enemies={ this.props.enemies } grid={ this.props.grid } path={ this.props.path } />
        <div>
          <button onClick={ (e) => this.start() }>Bring It On!</button>
        </div>
      </div>
    );
  }
  
}

const mapStateToFunctions = (state) => {
  return {
    enemies: state.position.enemies,
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
    startWave: () => {
      dispatch( startWave() )
    }
  }
};

export default connect(mapStateToFunctions, mapDispatchToFunctions)(GameContainer);