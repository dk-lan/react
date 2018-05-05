import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Actions from './actions'

class Component2 extends Component{
    render(){
        return (
            <div>
                <h3>component-cp2-{this.props.cp2}</h3>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        cp1: store.cp1,
        cp2: store.cp2
    }
}

export default connect(mapStateToProps, Actions)(Component2)