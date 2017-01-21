/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import pageMenu from './pageMenu';

const rootReducer = combineReducers({
  pageMenu,
});

export default rootReducer;
