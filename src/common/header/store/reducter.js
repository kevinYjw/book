import {SET_FOCUSED,SET_LIST,SET_MOUSEIN,SET_PAGE} from '../store/actionType';
import {fromJS} from 'immutable';

const defaultStore = fromJS({
    focused:false,
    mouseIn:false,
    page:1,
    totalPage:1,
    list:[]
});

export default (state = defaultStore,action) => {
    if(action.type == SET_FOCUSED){
        return state.set('focused',action.value);
    }
    if(action.type == SET_LIST){
        return state.merge({
            totalPage:action.totalPage,
            list:action.data
        });
    }
    if(action.type == SET_MOUSEIN){
        return state.set('mouseIn',action.value);
    }
    if(action.type == SET_PAGE){
        return state.set('page',action.page);
    }
    return state;
}