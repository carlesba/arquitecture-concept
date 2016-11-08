
const form = (state = [], action) => {
  switch action.type {
    case 'ADD_BLOCK':
      return [...state, {id: Math.random()}]
    case 'REMOVE_BLOCK':
      return state.slice(0, x.length - 1)
    default:
      return state
  }
}

const light = (state = true, action) => {
  if (action.type === 'TURN_ON') return true
  else if (action.type === 'TURN_OFF') return false
  else return state
}

// Cobine reducers
const reducers = { form, light }

export default reducers

// Selectors
export getBlocks = (state) => state.form
export getBlocksLength = (state) => getBlocks(state).length

export isLightOn = (state) => state.light === true
export isLightOff = (state) => state.light === false
