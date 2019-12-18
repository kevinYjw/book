import {SET_FOCUSED,SET_LIST} from '../store/actionType';
import {Map} from 'immutable';

const defaultStore = Map({
    focused:false,
    list:[]
});

export default (state = defaultStore,action) => {
    if(action.type == SET_FOCUSED){
        return state.set('focused',action.value);
    }
    if(action.type == SET_LIST){
        return state.set('list',action.data);
    }
    return state;
}