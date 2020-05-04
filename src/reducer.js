export default function (state, action ) {
    switch (action.type){
        case "CHECK": 
        return updateState(state, action, true);
        case "UNCHECK": 
        return updateState(state, action, false);
        default:
            return state;
    }
}

function updateState (state, action, isChecked) {
    let  updated = JSON.parse(JSON.stringify(state));
    updated[action.parent][action.child] = isChecked;
    return updated;
}