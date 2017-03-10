const initialState = {
  enemies: [
    
  ],
  towers: [
    
  ],
  grid: {
    width: 0,
    height: 0
  },
  path: []
};


// --------------------- CONSTANTS ---------------------
const ADD_ENEMY = 'ADD_ENEMY';
const MOVE_ENEMY = 'MOVE_ENEMY';

const ADD_TOWER = 'ADD_TOWER';

const CREATE_GRID = 'CREATE_GRID';
const CREATE_PATH = 'CREATE_PATH';


// --------------------- ACTION CREATERS ---------------------
export const addEnemy = () => ({
  type: ADD_ENEMY
});

export const moveEnemy = (index) => ({
  type: MOVE_ENEMY, 
  index
});

export const createGrid = (width, height) => ({
  type: CREATE_GRID,
  width, height
});

export const createPath = (arrOfRectangles) => ({
  type: CREATE_PATH,
  path: arrOfRectangles
});


// --------------------- REDUCER ---------------------
export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  
  switch (action.type) {
    case ADD_ENEMY:
      newState.enemies.push({
        id: newState.enemies.length,
        position: [237.5,0],
        health: 50
      });
      break;
    case MOVE_ENEMY:
      newState.enemies = [...newState.enemies];
      newState.enemies[action.index] = Object.assign({}, newState.enemies[action.index]);
      newState.enemies[action.index].position = [...newState.enemies[action.index].position];
//       newState.enemies[action.index].position[0]++;
      newState.enemies[action.index].position[1]++;
      break;
    case CREATE_GRID:
      newState.grid.width = action.width;
      newState.grid.height = action.height;
      break;
    case CREATE_PATH:
      newState.path = action.path;
      break;
  }
  
  return newState;
}