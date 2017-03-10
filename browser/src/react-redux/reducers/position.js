const initialState = {
  enemies: [
    
  ],
  towers: [
    
  ]
};


// --------------------- CONSTANTS ---------------------
const ADD_ENEMY = 'ADD_ENEMY';
const MOVE_ENEMY = 'MOVE_ENEMY';

const ADD_TOWER = 'ADD_TOWER';


// --------------------- ACTION CREATERS ---------------------
export const addEnemy = () => ({
  type: ADD_ENEMY
});

export const moveEnemy = (index) => ({
  type: MOVE_ENEMY, 
  index
});


// --------------------- REDUCER ---------------------
export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  
  switch (action.type) {
    case ADD_ENEMY:
      newState.enemies.push({
        id: newState.enemies.length,
        position: [0,0],
        health: 50
      })
      break;
    case MOVE_ENEMY:
      newState.enemies = [...newState.enemies];
      newState.enemies[action.index] = Object.assign({}, newState.enemies[action.index]);
      newState.enemies[action.index].position = [...newState.enemies[action.index].position];
      newState.enemies[action.index].position[0]++;
      newState.enemies[action.index].position[1]++;
      break;
  }
  
  return newState;
}