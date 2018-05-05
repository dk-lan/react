import React, {Component} from 'react'

class NavComponent extends Comment{
    render(){
        return (
            <div class="['dk-nav-content', navOpen ? '' : 'toggle']" ref="dknav">
            <ul class="dk-nav">
                <li class="dk-nav-item nav-toggle">
                    <a class="btn btn-primary" href="javascript:" click="toggleNav" >
                        <i class="fa fa-bars"></i> 
                    </a>
                </li>
                <li class="dk-nav-item" click="toggleNavItem">
                    <a href="javascript:">
                        <i class="fa fa-file-o"></i>
                        <span>档案管理</span>
                        <i class="fa fa-angle-left"></i>
                    </a>
                    <ul class="dk-sub-nav">
                        <li><router-link to="/clients">客户档案</router-link></li>
                        <li><router-link to="/">产品档案</router-link></li>
                        <li><router-link to="/">供应商档案</router-link></li>
                        <li><router-link to="/">人事档案</router-link></li>
                    </ul>
                </li>
                <li class="dk-nav-item" click="toggleNavItem">
                    <a href="javascript:">
                        <i class="fa fa-cog"></i>
                        <span>系统设置</span>
                        <i class="fa fa-angle-left"></i>
                    </a>
                    <ul class="dk-sub-nav">
                        <li><router-link to="/">修改密码</router-link></li>
                        <li><router-link to="/">修改信息</router-link></li>
                        <li><router-link to="/">权限设置</router-link></li>
                        <li><router-link to="/">模块设置</router-link></li>
                    </ul>
                </li>					
            </ul>
        </div>	       
        )
    }
}

export default NavComponent