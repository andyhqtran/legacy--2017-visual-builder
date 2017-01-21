/**
 * Internal dependencies
 */
import * as types from '../constants/ActionTypes';

const toggleMenu = status => ({ type: types.TOGGLE_MENU, status });
const changeMenu = view => ({ type: types.CHANGE_MENU, view });

export {
  changeMenu,
  toggleMenu,
};
