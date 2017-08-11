export function login(username, password){
    return {
        types: ['a', 'b', 'c'],
        path: 'login',
        method: 'post',
        query: {username, password}
    }
}