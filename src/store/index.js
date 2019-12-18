import {createStore,applyMiddleware} from 'redux';
import reducter from './reducter';
import thunk from 'redux-thunk';

const store = createStore(reducter,applyMiddleware(thunk));

export default store;