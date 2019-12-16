import {createStore} from 'redux';
import reducter from './reducter';

const store = createStore(reducter);

export default store;