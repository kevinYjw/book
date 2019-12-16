import {combineReducers} from 'redux';

import {reducter as headerReducter} from '../common/header/store';

export default combineReducers({
    header:headerReducter
})