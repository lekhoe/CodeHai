import { createStore } from 'redux';
import appReducers from './reducers/Index';

const stores = createStore(appReducers);

export default stores;