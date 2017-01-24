/**
 * Internal dependencies
 */
import {
  ADD_PAGE,
  CHANGE_PAGE,
  DELETE_PAGE,
} from '../constants/ActionTypes';

/**
 * Initial state
 */
const initialState = {
  active: 0,
  pages: [
    {},
  ],
};

/**
 * pages reducer
 */
function pages(state = initialState, action) {
  switch (action.type) {
    case ADD_PAGE:
    case DELETE_PAGE:
    case CHANGE_PAGE:
    default:
      return state;
  }
}

export default pages;
