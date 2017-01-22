/**
 * Internal dependencies
 */
import * as types from '../constants/ActionTypes';

const addElement = element => ({ type: types.ADD_ELEMENT, element });
const deleteElement = element => ({ type: types.ADD_ELEMENT, element });
const changeMenu = view => ({ type: types.CHANGE_MENU, view });
const toggleMenu = status => ({ type: types.TOGGLE_MENU, status });

export {
  addElement,
  changeMenu,
  deleteElement,
  toggleMenu,
};
