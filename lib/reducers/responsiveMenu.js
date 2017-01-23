/**
 * Internal dependencies
 */
import { TOGGLE_RESPONSIVE_MENU } from '../constants/ActionTypes';

/**
 * Initial state
 */
const initialState = {
  status: false,
};

/**
 * responsiveMenu reducer
 */
function responsiveMenu(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_RESPONSIVE_MENU:
      return {
        ...state,
        status: !state.status,
      };
    default:
      return state;
  }
}

export default responsiveMenu;
