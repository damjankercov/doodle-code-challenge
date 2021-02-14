import {
    LOAD_MESSAGES_SUCCESS,
    SEND_MESSAGE_SUCCESS,
} from '../actions/actionTypes'

import { getNewState } from '../../utils/utils';

const initialState = {
    messages: [],
};

export default function chatReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_MESSAGES_SUCCESS: {
            return getNewState(state, {
                ...state,
                messages: action.payload
            });
        }
        case SEND_MESSAGE_SUCCESS: {
            return getNewState(state, {
                ...state,
                messages: state.messages.concat(action.payload)
            })
        }
        default:
            return state;
    }
}