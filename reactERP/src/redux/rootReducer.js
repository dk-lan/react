import { combineReducers } from 'redux';

import login from '../modules/login/LoginReducer';
import order from '../modules/order/orderReducer';
import cp1 from '../components/cp1/reducer'
import cp2 from '../components/cp2/reducer'

const rootReducer = combineReducers({
    login,
    order,
    cp1,
    cp2
});

export default rootReducer;