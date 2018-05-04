// import './libs/bootstrap/css/bootstrap.min.css'
// import './libs/font-awesome/css/font-awesome.min.css'

import React from 'react';
import ReactDOM from 'react-dom';
// import LoginComponent from './modules/login/LoginComponent';
// import OrderComponent from './modules/order/orderComponent';
// import CP from './modules/cp/cp'
// import {Provider} from 'react-redux';
// import store from './redux/configStore';

// ReactDOM.render(
//     <Provider store={store}>
//         <CP/>
//     </Provider>, 
//     document.getElementById('app')
// );

let c1 = {
    color: 'red',
    width: '100%',
    height: '300px',
    border: 'solid 1px red'
}
class Component1 extends React.Component{
    render(){
        console.log(c1)
        return (
            <div style={c1}></div>
        )        
    }
}
ReactDOM.render(
    <Component1 />,
    document.getElementById('app')
)