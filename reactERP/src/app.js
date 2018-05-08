import './libs/bootstrap/css/bootstrap.min.css'
import './libs/font-awesome/css/font-awesome.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import store from './redux/configStore'
// import routes from './router'

// ReactDOM.render(
//     <Router history={hashHistory} routes={routes}/>,
//     document.getElementById('app')
// )


import Component1 from './components/cp1/cp1'
import CNodeComponent from './components/cnode/cnode'
ReactDOM.render(
    <Provider store={store}>
        <CNodeComponent/>
    </Provider>,
    document.getElementById('app')
)