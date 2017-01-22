/**
 * Internal dependencies
 */
import * as types from '../constants/ActionTypes';

const addElement = element => ({ type: types.ADD_ELEMENT, element });
const deleteElement = element => ({ type: types.ADD_ELEMENT, element });
const changeElementMenu = view => ({ type: types.CHANGE_ELEMENT_MENU, view });
const toggleElementMenu = status => ({ type: types.TOGGLE_ELEMENT_MENU, status });

export {
  addElement,
  changeElementMenu,
  deleteElement,
  toggleElementMenu,
};
