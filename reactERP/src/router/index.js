import React from 'react'
import {Routes} from 'react-router'

import AppComponent from '../components/app/app'
import HomeComponent from '../components/home/home'
import LoginComponent from '../components/login/login'

const routes = (
    <Routes path="/" component={AppComponent}>
        <Router path="login" component={LoginComponent} />
        <Router path="home" component={HomeComponent}/>
    </Routes>
)

export default routes;