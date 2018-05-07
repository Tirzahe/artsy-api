import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import artwork from './artwork';

const rootReducer = combineReducers({ artwork });

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

store.subscribe(() => console.log(store.getState()));

export default store;

