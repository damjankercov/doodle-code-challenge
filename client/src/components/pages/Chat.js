import React, { useEffect, useState } from 'react';
import Item from '../layout/Item';
import Container from '../layout/Container';
import { TextField, withStyles, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/actions/userActions';
import { loadMessages, sendMessage } from '../../redux/actions/chatActions';
import Message from '../ui/Message';

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

    useEffect(() => {
        const timer = window.setInterval(() => {
            dispatch(loadMessages())
        }, 1000);
        return () => {
            window.clearInterval(timer);
        };
    }, []);

    const logoutHandler = () => {
        dispatch(logoutAction())
    }

    const textInputHandler = ({ target: { value } }) => {
        setNewMessage(value)
    }

    const [newMessage, setNewMessage] = useState('');

    const sendMessageHandler = (event) => {
        event.stopPropagation()
        dispatch(sendMessage(username, newMessage));
        setNewMessage('');
    }

    const messages = useSelector(state => state.chat.messages);
    const username = useSelector(state => state.user.username);

    return (
        <Container className={classes.root} direction={'column'} alignItems={'center'} justify={'flex-end'}>
            {
                messages ?
                    messages.map(message =>
                        <Message
                            message={message}
                            currentUsername={username}
                        />
                    )
                    : ''
            }
            <Item className={classes.bottomArea} >
                <Container justify={'center'}>
                    <Item>
                        <IconButton color="primary" onClick={logoutHandler}>
                            <ExitToAppIcon />
                        </IconButton>
                    </Item>
                    <Item>
                        <TextField variant="outlined" value={newMessage} className={classes.inputField} onChange={textInputHandler} />
                    </Item>
                    <Item>
                        <IconButton color="primary" onClick={sendMessageHandler}>
                            <SendIcon />
                        </IconButton>
                    </Item>
                </Container>
            </Item>
        </Container>
    )
};

export default withStyles(style)(Chat);