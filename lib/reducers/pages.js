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
const initialState = [
  {
    name: 'Page 1',
    id: 0,
    elements: [],
  },
];

/**
 * pages reducer
 */
function pages(state = initialState, action) {
  switch (action.type) {
    case ADD_PAGE:
      return [
        {
          name: action.name,
          id: state.reduce((maxId, page) => Math.max(page.id, maxId), -1) + 1,
          elements: [],
        },
        ...state,
      ];
    case DELETE_PAGE:
      return state.filter(page =>
        page.id !== action.id,
      );

    case CHANGE_PAGE:
    default:
      return state;
  }
}

export default pages;
