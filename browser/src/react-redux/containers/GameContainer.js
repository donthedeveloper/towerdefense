import React from 'react';
import { connect } from 'react-redux';

import Grid from '../components/Grid';



const GameContainer = (props) => {
  return (
    <div>
      <Grid enemies={ props.enemies } />
      <div>
        <button>Bring It On!</button>
      </div>
    </div>
  );
};

const mapStateToFunctions = (state) => {
  return {
    
  }
};

const mapDispatchToFunctions = (dispatch) => {
  return {
    
  }
};

export default connect(mapStateToFunctions, mapDispatchToFunctions)(GameContainer);