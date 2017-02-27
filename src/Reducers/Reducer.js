import * as types from '../Constants/ActionTypes'

let defaultState = {timer:0, loading:false};

function Reducer(state, action) {
    switch(action.type) {
        case types.UPDATE_TIMER :
            return Object.assign({}, state, {timer : action.timer});
        case types.RECEIVE_TIMER :
            return Object.assign({}, state, {timer : action.timer, loading: action.loading});
        case types.REQUEST_TIMER :
            return Object.assign({}, state, {loading: action.loading});            
        default: return defaultState;
    }
}

export default Reducer;