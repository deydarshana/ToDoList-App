import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import bookReducer from './Book/bookReducer';

const store = createStore(bookReducer, applyMiddleware(logger));

export default store;