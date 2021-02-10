import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/actions/userActions';

const Chat = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutAction())
    }

    return (
        <div>
            <h1>Chat Page</h1>
            <button onClick={logoutHandler}>logout</button>
        </div>
    )
};

export default Chat;