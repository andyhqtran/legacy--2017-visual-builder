/**
 * Internal dependencies
 */
import * as types from '../constants/ActionTypes';

const addElement = element => ({ type: types.ADD_ELEMENT, element });
const deleteElement = element => ({ type: types.ADD_ELEMENT, element });
const changeElementMenu = view => ({ type: types.CHANGE_ELEMENT_MENU, view });
const toggleElementMenu = status => ({ type: types.TOGGLE_ELEMENT_MENU, status });

const togglePagesMenu = status => ({ type: types.TOGGLE_PAGES_MENU, status });
const toggleResponsiveMenu = status => ({ type: types.TOGGLE_RESPONSIVE_MENU, status });

export {
  addElement,
  changeElementMenu,
  deleteElement,
  toggleElementMenu,
  togglePagesMenu,
  toggleResponsiveMenu,
};
