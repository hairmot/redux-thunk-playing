export function updateTimer(timer) 
{   
    return {
        type: "UPDATE_TIMER",
        timer: timer + 1
    }
}

//New actions for async 

function requestTimer() {
    return {
        type: "REQUEST_TIMER",
        loading: true
    }
}

function receiveTimer(json) {
    return {
        type: "RECEIVE_TIMER",
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