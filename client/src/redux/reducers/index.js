import { combineReducers } from 'redux';
import { LOGOUT_SUCCESS } from '../actions/actionTypes';

import user from './userReducer';
import chat from './chatReducer';

const appReducer = combineReducers({
    user,
    chat,
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
        state = undefined;
    }

    return appReducer(state, action);
}

export default rootReducer;