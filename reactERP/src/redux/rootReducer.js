import { combineReducers } from 'redux';

import login from '../modules/login/LoginReducer';
import order from '../modules/order/orderReducer';

const rootReducer = combineReducers({
    login,
    order
});

export default rootReducer;