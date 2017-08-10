import common from '../../libs/common/common';

export default function login(_username, _password){
    return {
        type: '',
        url: common.baseUrl + 'login',
        data: {username: _username, _password}
    }
}