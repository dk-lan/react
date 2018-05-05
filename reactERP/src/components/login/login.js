import React, {Component} from 'react'

import './login.scss'

class LoginComponent extends Comment{
    render(){
        return (
            <div className="login-box">
                <div className="col-sm-12 b-r">
                    <h3 className="m-t-none m-b">登录</h3>
                    <form role="form">
                        <div className="form-group text-left">
                            <label>用户名：</label>
                            <input type="text" v-model="username" name="username" placeholder="请输入用户名" className="form-control required" />
                        </div>
                        <div className="form-group  text-left">
                            <label>密码：</label>
                            <input type="password" v-model="pwd" name="password" placeholder="请输入密码" className="form-control required" />
                        </div>
                        <div>
                            <input type="button" className="btn btn-primary pull-right m-t-n-xs" value="登录" onClick="login" />
                        </div>
                    </form>
                </div>
                <div class="copyright">2017 © dk by www.dk-lan.com</div>
            </div>            
        )
    }
}

export default LoginComponent