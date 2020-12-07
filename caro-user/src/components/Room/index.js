import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const Room = ({room}) => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <img className={classes.image} src="/assets/images/board-room.png"/>
            <Typography>ID: 123</Typography>
            <Typography>Let's play Tic Tac Toe</Typography>
        </div>
    )
}

const useStyle = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    image:{
        width: '60%',
        cursor: 'pointer'
    }
})
export default Room;