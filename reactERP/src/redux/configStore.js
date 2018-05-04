import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {ajaxMiddleware} from '../utils/ajaxMiddleware';

import rootReducer from './rootReducer';

const store = createStore(rootReducer)

export default store;