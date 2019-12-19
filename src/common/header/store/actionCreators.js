import {SET_FOCUSED,SET_LIST,SET_MOUSEIN,SET_PAGE} from './actionType';
import axios from 'axios';
import {fromJS} from 'immutable';

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

export const getHandleMouseEnterAction = (value) => ({
    type:SET_MOUSEIN,
    value
})

export const getHandleChangePage = (page) => ({
    type:SET_PAGE,
    page
})

const getListAction = (data) => ({
    type:SET_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length / 10)
})