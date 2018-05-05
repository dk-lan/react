import React, {Component} from 'react'

class SpinnerComponent extends Comment{
    render(){
        return (
            <div>
            <div class="dk-spinner-mask"></div>
            <div class="dk-spinner dk-spinner-three-bounce">
                <div class="dk-bounce1"></div>
                <div class="dk-bounce2"></div>
                <div class="dk-bounce3"></div>
            </div>        
        </div>     
        )
    }
}

export default SpinnerComponent