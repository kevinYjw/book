import {SET_FOCUSED,SET_LIST} from './actionType';
import axios from 'axios';
import { fromJS } from 'immutable';

export const getInputToggleAction = (value) => ({
    type:SET_FOCUSED,
    value
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data.data;
            const action = getListAction(data);
            dispatch(action);
        }).catch(() => {
            console.log('error');
        })
    }
}

const getListAction = (data) => ({
    type:SET_LIST,
    data:fromJS(data)
})