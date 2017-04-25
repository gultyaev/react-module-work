import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(combineReducers({
	fb: reducers.feedbackReducer
}), middlewares);

export default store;