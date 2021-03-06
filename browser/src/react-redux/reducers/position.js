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
  projectiles: [

  ],
  grid: {
    width: 0,
    height: 0
  },
  path: [],
  started: false,
  selectedTower: null
};


// --------------------- CONSTANTS ---------------------
const ADD_ENEMY = 'ADD_ENEMY';
const MOVE_ENEMY = 'MOVE_ENEMY';

const ADD_TOWER = 'ADD_TOWER';
const SELECT_TOWER = 'SELECT_TOWER';

const ADD_TARGET = 'ADD_TARGET';

const ADD_PROJECTILE = 'ADD_PROJECTILE';
const UPDATE_PROJECTILE = 'UPDATE_PROJECTILE';

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
});

export const selectTower = (towerId) => ({
  type: SELECT_TOWER,
  towerId
});

export const addTarget = (towerId, enemyId) => ({
  type: ADD_TARGET,
  towerId,
  enemyId
});

export const addProjectile = (start, end, towerId, target) => ({
  type: ADD_PROJECTILE,
  start,
  end,
  towerId,
  target
})

export const updateProjectile = (projectileId, end) => ({
  type: UPDATE_PROJECTILE,
  projectileId,
  end
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
      newState.enemies[action.index].destination = [237.5, 471];
      break;
    case ADD_TOWER:
      newState.towers.push({
        id: newState.towers.length,
        position: action.position,
        attack: 10,
        reach: 50,
        target: null
      });
      break;
    case SELECT_TOWER:
      newState.selectedTower = action.towerId;
      break;
    case ADD_TARGET:
      newState.towers[action.towerId].target = action.enemyId;
      break;
    case ADD_PROJECTILE:
      newState.projectiles.push({
        id: newState.projectiles.length,
        start: action.start,
        end: action.end,
        towerId: action.towerId,
        target: action.target
      });
      break;
    case UPDATE_PROJECTILE:
      newState.projectiles[action.projectileId].end = action.end;
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
