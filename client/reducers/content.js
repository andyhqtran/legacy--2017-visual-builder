/**
 * Internal dependencies
 */
import { ADD_ELEMENT, DELETE_ELEMENT } from '../constants/ActionTypes';

/**
 * Initial state
 */
const initialState = {
  elements: [],
};

/**
 * content reducer
 */
function content(state = initialState, action) {
  switch (action.type) {
    case ADD_ELEMENT:
      return {
        ...state,
        view: action.view,
      };
    case DELETE_ELEMENT:
      return {
        ...state,
        status: !state.status,
      };
    default:
      return state;
  }
}

export default content;
