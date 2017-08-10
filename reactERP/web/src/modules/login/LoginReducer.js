// import httpclient from '../../utils/HttpClient'
export default function(state = {}, action){

    // httpclient.post(action.url, action.data).then(response => {
    //     console.log(response);
    //     state.state = response.state;
    //     return state;
    // })

    // return state;

    state.dataset = action.response.data.data;
    return state;
}