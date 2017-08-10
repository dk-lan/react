import React, {Component} from 'react';
import LoginAction from './LoginAction';
// import {Input} from 'element-react';
// import 'element-theme-default';

class LoginComponent extends Component{
    render(){
        return (
        <div class="col-md-12">
            <div class="form-group">
                <label class="col-sm-2 control-label" for="form-field-1">
                    用户名
                </label>
                <div class="col-sm-9">
                    <input type="text" placeholder="输入用户名" id="form-field-1" class="form-control"/>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label" for="form-field-1">
                    密码
                </label>
                <div class="col-sm-9">
                    <input type="text" placeholder="输入密码" id="form-field-1" class="form-control"/>
                </div>
            </div> 
            <button type="button" class="btn btn-primary">登录</button>                       
        </div>            
        )
    }
}

export default LoginComponent;