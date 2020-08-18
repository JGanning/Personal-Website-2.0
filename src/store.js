import {createStore } from 'redux';
import rootReducer from './rootReducers.js';

const store = createStore(rootReducer);

export default store;