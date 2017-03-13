import React from 'react';

export default (props) => {
  // const count = props.towers.count();
  // console.log(props);

  return(
    <div className="dashboard">
      <div className="stats">
        <p className="enemies">5</p>
        <p className="towers">{ props.towers.length }</p>
      </div>
      <div className="actions">
        <button disabled={ props.started } className="startWave" onClick={ (e) => props.start() }>Start Wave</button>
      </div>
    </div>
  );
}
