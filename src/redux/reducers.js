import { combineReducers } from 'redux'
import { ITEM_LOADED } from './actions.js'

function loadedItems(state = { loadedItems: [] }, action) {
  switch(action.type) {
    case ITEM_LOADED:
      return { loadedItems: state.loadedItems.concat(action.payload) }
    default:
      return state
  }
}

const App = combineReducers({ loadedItems })
export default App
