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

class Component1 extends React.Component{
    submit(n, e){
        console.log(n)
        e.target.style.color = 'red'
    }
    render(){
        return <input type="button" value="submit" onClick={this.submit.bind(this, 20)}/>
    }
}
ReactDOM.render(
    <Component1 />,
    document.getElementById('app')
)