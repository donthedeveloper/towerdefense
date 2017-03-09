const initialState = {
  enemies: [
    
  ],
  towers: [
    
  ]
};

const ADD_ENEMIES = 'ADD_ENEMIES';
const MOVE_ENEMIES = 'MOVE_ENEMIES';

const ADD_TOWER = 'ADD_TOWER';

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  
  switch (action.type) {
    case ADD_ENEMIES:
      newState.enemies.push({
        position: [0,0],
        health: 50
      })
  }
  
  return newState;
}

export const addEnemy = () => ({
  type: ADD_ENEMIES
});