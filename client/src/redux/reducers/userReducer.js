import {
    LOGIN_SUCCESS,
} from '../actions/actionTypes';

import { getNewState } from '../../utils/utils';

const initialState = {
    username: '',
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return getNewState(state, {
                username: action.payload
            })
        }
        default:
            return state;
    }
};