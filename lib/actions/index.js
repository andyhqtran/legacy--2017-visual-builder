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

const decreaseContentSize = () => ({ type: types.DECREASE_CONTENT_SIZE });
const changeContentSize = size => ({ type: types.CHANGE_CONTENT_SIZE, size });
const increaseContentSize = () => ({ type: types.INCREASE_CONTENT_SIZE });

export {
  addElement,
  changeContentSize,
  changeElementMenu,
  decreaseContentSize,
  deleteElement,
  increaseContentSize,
  toggleElementMenu,
  togglePagesMenu,
  toggleResponsiveMenu,
};
