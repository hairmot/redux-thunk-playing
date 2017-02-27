let defaultState = {timer:0, loading:false};

function Reducer(state, action) {
    switch(action.type) {
        case "UPDATE_TIMER" :
            return Object.assign({}, state, {timer : action.timer});
        case "RECEIVE_TIMER" :
            return Object.assign({}, state, {timer : action.timer, loading: action.loading});
        case "REQUEST_TIMER" :
            return Object.assign({}, state, {loading: action.loading});            
        default : return defaultState;
    }
}

export default Reducer;