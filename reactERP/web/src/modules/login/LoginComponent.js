import React, {Component} from 'react';
import loginActions from './LoginAction';
import {connect} from 'react-redux'
// import {Input} from 'element-react';
// import 'element-theme-default';

class LoginComponent extends Component{
    render(){
        return (
        <div className="col-md-12">
            <div className="form-group">
                <label className="col-sm-2 control-label">
                    用户名
                </label>
                <div className="col-sm-9">
                    <input type="text" placeholder="输入用户名" id="form-field-1" className="form-control"/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">
                    密码
                </label>
                <div className="col-sm-9">
                    <input type="text" placeholder="输入密码" id="form-field-1" className="form-control"/>
                </div>
            </div> 
            <button type="button" className="btn btn-primary">登录</button>
            <i className="fa fa-fire"></i>
        </div>            
        )
    }
}

const mapStateToProps = state => ({
    loading: false,
})
export default connect(mapStateToProps, loginActions)(LoginComponent)