import api from '../../utils/api';
import { LOAD_MESSAGES_SUCCESS, SEND_MESSAGE_SUCCESS } from './actionTypes';

export const loadMessages = () => dispatch => {
    let endpoint = 'messages';
    api.instance.get(endpoint)
        .then(response => {
            dispatch({ type: LOAD_MESSAGES_SUCCESS, payload: response.data })
        })
        .catch(err => {
            console.log(err);
        });
}

export const sendMessage = (user, content) => dispatch => {
    let endpoint = 'messages';
    api.instance.post(endpoint, { user, content })
        .then(response => {
            dispatch({ type: SEND_MESSAGE_SUCCESS, payload: response.data })
        })
        .catch(err => {
            console.log(err);
        })
}