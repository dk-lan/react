export default (state = 0, action) => {
    switch(action.type){
        case '+':
            return state + 1;
        case '-':
            return state - 1;
        default:
            return state;
    }
}