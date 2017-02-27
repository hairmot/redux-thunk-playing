import * as types from '../Constants/ActionTypes'

export function updateTimer(timer) {   
    return {
        type: types.UPDATE_TIMER,
        timer: timer + 1
    }
}

function requestTimer() {
    return {
        type: types.REQUEST_TIMER,
        loading: true
    }
}

function receiveTimer(json) {
    return {
        type: types.RECEIVE_TIMER,
        loading: false,
        timer: json.timer
    }
}

export function fetchTimer() {
    return function(dispatch) {
        dispatch(requestTimer());
        return fetch('api.js').then(response => 
        response.json()).then(json =>
            setTimeout(() => {
            dispatch(receiveTimer(json)) }, 1000)
        );
    }
}

