import {combineReducers} from 'redux-immutable';

import {reducter as headerReducter} from '../common/header/store';

export default combineReducers({
    header:headerReducter
})