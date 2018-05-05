import React, {Component} from 'react'

class HomeComponent extends Comment{
    render(){
        return (
            <div class="dk-container">
            <dk-header></dk-header>
            <div class="dk-body">
                <dk-nav></dk-nav>
                <div class="dk-content">
                    <div class="dk-toolbar" style="background: #fff;">
                        <a href="javascript:" class="btn btn-primary btn-sm" class="value.class" v-if="toolList" v-for="(value,key) in toolList" click="click(value)"></a>
                    </div>
                    <router-view class="dk-viewer"></router-view>
                </div>
            </div>
            <div class="dk-footer">@dk</div>
        </div>	       
        )
    }
}

export default HomeComponent