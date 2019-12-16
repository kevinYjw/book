import {SET_FOCUSED} from '../store/actionType';

const defaultStore = {
    focused:false
}

export default (state = defaultStore,action) => {
    if(action.type == SET_FOCUSED){
        let newState = JSON.parse(JSON.stringify(state));
        newState.focused = action.value;
        return newState;
    }
    return state;
}