import React from 'react';
import Item from '../layout/Item';
import { Card, CardContent, Typography, withStyles } from '@material-ui/core';

const style = theme => ({
    you: {
        backgroundColor: '#aaf2e9',
        position: 'relative',
        left: '20px'
    },
    others: {
        backgroundColor: '#f0f2ac',
        position: 'relative',
        right: '20px',
    }
})

const Chat = ({ classes, message, currentUsername }) => {

    const isCurrentUser = () => {
        return currentUsername == message.user;
    }

    return (
        <Item>
            <Card className={classes.root} variant="outlined" className={isCurrentUser() ? classes.you : classes.others}>
                <CardContent>
                    <Typography>
                        {isCurrentUser() ? 'YOU' : message.user}
                    </Typography>
                    <Typography>
                        {message.content}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {message.createdAt.toString()}
                    </Typography>
                </CardContent>
            </Card>
        </Item >
    )
};

export default withStyles(style)(Chat);