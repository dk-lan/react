import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Actions from './actions'

import Component2 from '../cp2/cp2'
class Component1 extends Component{
    increment = () => {
        console.log(this.props)
        this.props.increment();
    }
    
    render(){
        return (
            <div>
                <h3>component-cp1-{this.props.cp1}</h3>
                <input type="button" value="increment" onClick={this.increment}/>
                <Component2 />
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        cp1: store.cp1
    }
}

export default connect(mapStateToProps, Actions)(Component1)