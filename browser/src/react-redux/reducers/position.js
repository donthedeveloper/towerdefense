const initialState = {
  enemies: [
    // {
    //   position: [x, y],
    //   health: 50
    // }
  ],
  towers: [
    // {
    //   range/radius,
    //   attack: 10,
    //   cost: 50
    // }
  ],
  grid: {
    width: 0,
    height: 0
  },
  path: [],
  started: false
};


// --------------------- CONSTANTS ---------------------
const ADD_ENEMY = 'ADD_ENEMY';
const MOVE_ENEMY = 'MOVE_ENEMY';

const ADD_TOWER = 'ADD_TOWER';

const CREATE_GRID = 'CREATE_GRID';
const CREATE_PATH = 'CREATE_PATH';

const START_WAVE = 'START_WAVE';


// --------------------- ACTION CREATERS ---------------------
export const addEnemy = (delayInSeconds) => ({
  type: ADD_ENEMY,
  delayInSeconds
});

export const moveEnemy = (index) => ({
  type: MOVE_ENEMY,
  index
});

export const addTower = (position) => ({
  type: ADD_TOWER,
  position
})

export const createGrid = (width, height) => ({
  type: CREATE_GRID,
  width, height
});

export const createPath = (arrOfRectangles) => ({
  type: CREATE_PATH,
  path: arrOfRectangles
});

export const startWave = () => ({
  type: START_WAVE
});


// --------------------- REDUCER ---------------------
export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case ADD_ENEMY:
      newState.enemies.push({
        id: newState.enemies.length,
        position: [237.5,0],
        health: 50,
        delayInSeconds: action.delayInSeconds,
        destination: [237.5,0]
      });
      break;
    case MOVE_ENEMY:
      newState.enemies = [...newState.enemies];
      newState.enemies[action.index] = Object.assign({}, newState.enemies[action.index]);
      newState.enemies[action.index].position = [...newState.enemies[action.index].position];
      newState.enemies[action.index].destination = [...newState.enemies[action.index].destination];
//       newState.enemies[action.index].position[0]++;
      newState.enemies[action.index].position[1]++;
      newState.enemies[action.index].destination = [237.5, 500];
      break;
    case ADD_TOWER:
      newState.towers.push({
        id: newState.towers.length,
        position: action.position,
        attack: 10,
        reach: 50
      });
      break;
    case CREATE_GRID:
      newState.grid.width = action.width;
      newState.grid.height = action.height;
      break;
    case CREATE_PATH:
      newState.path = action.path;
      break;
    case START_WAVE:
      newState.started = true;
      break;
  }

  return newState;
}
