/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import content from './content';
import elementMenu from './elementMenu';

const rootReducer = combineReducers({
  content,
  elementMenu,
});

export default rootReducer;
