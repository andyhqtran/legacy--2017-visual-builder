/**
 * Internal dependencies
 */
import { CHANGE_ELEMENT_MENU, TOGGLE_ELEMENT_MENU } from '../constants/ActionTypes';

/**
 * Initial state
 */
const initialState = {
  recent: false,
  saved: false,
  status: false,
  view: 0,
};

/**
 * elementMenu reducer
 */
function elementMenu(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ELEMENT_MENU:
      return {
        ...state,
        view: action.view,
      };
    case TOGGLE_ELEMENT_MENU:
      return {
        ...state,
        status: !state.status,
        view: 0,
      };
    default:
      return state;
  }
}

export default elementMenu;
