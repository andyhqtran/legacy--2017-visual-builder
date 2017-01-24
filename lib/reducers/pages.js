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
    {
      name: 'Page 1',
      elements: [],
    },
  ],
};

/**
 * pages reducer
 */
function pages(state = initialState, action) {
  switch (action.type) {
    case ADD_PAGE:
      return {
        ...state,
        pages: [
          ...state.pages,
          {
            name: action.name,
            elements: [],
          },
        ],
      };
    case DELETE_PAGE:
    case CHANGE_PAGE:
    default:
      return state;
  }
}

export default pages;
