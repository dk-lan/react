import './libs/bootstrap/css/bootstrap.min.css'
import './libs/font-awesome/css/font-awesome.min.css'

import React from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from './modules/login/LoginComponent';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import LoginReducer from './modules/login/LoginReducer';
import {ajaxMiddleware} from './utils/ajaxMiddleware';
import { routerMiddleware } from 'react-router-redux';
import {Router, Route, hashHistory, browserHistory} from 'react-router'

// const middleware = applyMiddleware(thunk, ajaxMiddleware);
    // let middleware = applyMiddleware(thunk, ajaxMiddleware, routerMiddleware(browserHistory))

    const store = createStore(LoginReducer, {}, applyMiddleware(thunkMiddleware, ajaxMiddleware))
// const store = createStore(LoginReducer);

ReactDOM.render(
    <Provider store={store}>
        <LoginComponent/>
    </Provider>, 
    document.getElementById('app')
);