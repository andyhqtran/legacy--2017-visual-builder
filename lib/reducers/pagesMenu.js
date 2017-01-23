/**
 * Internal dependencies
 */
import { TOGGLE_PAGES_MENU } from '../constants/ActionTypes';

/**
 * Initial state
 */
const initialState = {
  status: false,
};

/**
 * pagesMenu reducer
 */
function pagesMenu(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_PAGES_MENU:
      return {
        ...state,
        status: !state.status,
      };
    default:
      return state;
  }
}

export default pagesMenu;
