import React, { useEffect, useState } from 'react';
import { TextField, Button, withStyles } from '@material-ui/core';
import Item from '../layout/Item';
import Container from '../layout/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../../redux/actions/userActions';

const style = theme => ({
    root: {
        height: '100vh',
    },
    formContainer: {
        height: '50vh',
        width: '100vw',
    },
})

const Login = ({ classes }) => {
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
        dispatch(loginAction(username.trim()));
    }

    return (
        <Container spacing={5} className={classes.root} direction='column' justify='center' alignItems='center'>
            <Item>
                <TextField label="username" value={username} onChange={textInputHandler} />
            </Item>
            <Item>
                <Button variant="contained" color="primary" onClick={loginHandler}>
                    Login
                </Button>
            </Item>
        </Container>
    )
};

export default withStyles(style)(Login);