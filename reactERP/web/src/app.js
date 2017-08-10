import './libs/bootstrap/css/bootstrap.min.css'
import './libs/font-awesome/css/font-awesome.min.css'

import React from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from './modules/login/LoginComponent';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from './modules/login/LoginReducer';

const middleware = applyMiddleware(thunk, ajaxMiddleware);

const store = createStore(middleware)

ReactDOM.render(<Provider store={store}><LoginComponent /></Provider>, document.getElementById('app'));