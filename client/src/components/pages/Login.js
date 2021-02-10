import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../../redux/actions/userActions';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user.username !== defaultUsername) {
            history.push('/chat')
        }
    }, [user])

    const defaultUsername = ''
    const [username, setUsername] = useState(defaultUsername);

    const textInputHandler = ({ target: { value } }) => {
        setUsername(value);
    }

    const loginHandler = () => {
        dispatch(loginAction(username));
    }

    return (
        <div>
            <h1>Login Page</h1>
            <label>username</label>
            <input value={username} onChange={textInputHandler} />
            <button onClick={loginHandler}>login</button>
        </div>
    )
};

export default Login;