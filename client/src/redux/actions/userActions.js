import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actionTypes';

export const loginAction = (username) => dispatch => {
    dispatch({ type: LOGIN_SUCCESS, payload: username })
}

export const logoutAction = () => dispatch => {
    dispatch({ type: LOGOUT_SUCCESS })
}