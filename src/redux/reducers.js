import { combineReducers } from 'redux'
import { ITEM_LOADED, RENDER_MODAL } from './actions.js'

function loadedItems(state = { loadedItems: [] }, action) {
  switch(action.type) {
    case ITEM_LOADED:
      return { loadedItems: state.loadedItems.concat(action.payload) }
    default:
      return state
  }
}

function modalContent(state = {}, action) {
  switch(action.type) {
    case RENDER_MODAL:
      return { modalContent: action.payload }
    default:
      return state
  }
}

const App = combineReducers({ loadedItems, modalContent })
export default App
