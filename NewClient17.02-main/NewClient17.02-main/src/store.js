  
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// import sitesReducer from './reducers/sitesReducer';
import usersReducer from './reducers/usersReducers';

const store = createStore(
    combineReducers({
        // sitesReducer,
        usersReducer
    }),
    {},
    applyMiddleware(thunk)
)

export default store;