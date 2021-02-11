import React, { useEffect, useState } from 'react';
import Item from '../layout/Item';
import Container from '../layout/Container';
import { TextField, withStyles, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/actions/userActions';

const style = theme => ({
    root: {
        height: '100vh',
    },
    inputField: {
        backgroundColor: '#f8f8f8',
    },
})

const Chat = ({ classes }) => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutAction())
    }

    const textInputHandler = ({ target: { value } }) => {
        setNewMessage(value)
    }

    const [newMessage, setNewMessage] = useState('');

    return (
        <Container className={classes.root} direction={'column'} alignItems={'center'} justify={'flex-end'}>
            <Item className={classes.bottomArea} >
                <Container justify={'center'}>
                    <Item>
                        <TextField variant="outlined" value={newMessage} className={classes.inputField} onChange={textInputHandler} />
                    </Item>
                    <Item>
                        <IconButton color="primary">
                            <SendIcon />
                        </IconButton>
                    </Item>
                </Container>
            </Item>
        </Container>
    )
};

export default withStyles(style)(Chat);