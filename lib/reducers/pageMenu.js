/**
 * Internal dependencies
 */
import { CHANGE_MENU, TOGGLE_MENU } from '../constants/ActionTypes';

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
 * pageMenu reducer
 */
function pageMenu(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MENU:
      return {
        ...state,
        view: action.view,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        status: !state.status,
        view: 0,
      };
    default:
      return state;
  }
}

export default pageMenu;
