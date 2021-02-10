import { combineReducers } from 'redux';
import { LOGOUT_SUCCESS } from '../actions/actionTypes';

import user from './userReducer';

const appReducer = combineReducers({
    user,
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
        state = undefined;
    }

    return appReducer(state, action);
}

export default rootReducer;