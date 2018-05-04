import './libs/bootstrap/css/bootstrap.min.css'
import './libs/font-awesome/css/font-awesome.min.css'

import React from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from './modules/login/LoginComponent';
import OrderComponent from './modules/order/orderComponent';
import {Provider} from 'react-redux';
import store from './redux/configStore';

ReactDOM.render(
    <Provider store={store}>
        <OrderComponent/>
    </Provider>, 
    document.getElementById('app')
);