import {SET_FOCUSED} from '../store/actionType';
import {Map} from 'immutable';

const defaultStore = Map({
    focused:false
});

export default (state = defaultStore,action) => {
    if(action.type == SET_FOCUSED){
        return state.set('focused',action.value);
    }
    return state;
}