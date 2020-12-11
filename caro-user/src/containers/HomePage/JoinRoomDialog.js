import React, { useState } from 'react';
import { Dialog, FormControlLabel, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MyTextField from '../../components/MyTextField';
import MyButton from '../../components/MyButton';
import { Redirect } from 'react-router-dom';
import { fetchWithAuthentication } from '../../api/fetch-data';
import { API_URL } from '../../global/constants';

const JoinRoomDialog = ({ open = false, onClose }) => {
  const classes = useStyle();

  const [roomId, setRoomId] = useState('');
  const [joinSuccessful, setJoinSuccessful] = useState({ status: false, message: '' });

  const joinRoom = () => {
    // Authenticated
    if (localStorage.getItem("caro-online-token") !== undefined) {
        const data = {
            roomId: roomId
        }
        fetchWithAuthentication(API_URL + 'room/join', 'POST', localStorage.getItem("caro-online-token"), data)
            .then(
                (data) => {
                    setJoinSuccessful({ status: true, message: data.message });
                },
                (error) => {
                    setJoinSuccessful({ status: false, message: error.message });
                }
            )
        }
    }

    if (joinSuccessful.status) {
        const to = '/room/' + roomId;
        return <Redirect to={to} />
    }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='xs'
      fullWidth
    >
      <Grid container style={{marginTop: '3%'}}>
        <Grid container item xs={2} />
        <Grid container item xs={8} justify='center' >
          <Typography className={classes.title}>Join Room</Typography>
        </Grid>
        <Grid container item xs={2} justify='center' alignItems='flex-start'>
          <IconButton onClick={onClose} size='small'>
            <HighlightOffIcon />
          </IconButton>
        </Grid>
      </Grid>

      <div className={classes.container}>
        <MyTextField
          label='Room ID'
          onChange={(event) => setRoomId(event.target.value)}
          value={roomId}
        />
        <MyButton
          style={{marginTop: '2.5%'}}
          onClick={() => joinRoom()}
        >
          Join
        </MyButton>
      </div>

    </Dialog>
  );
}


const useStyle = makeStyles({
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '8%',
    paddingRight: '8%',
    paddingBottom: '4%'
  }
});

export default JoinRoomDialog;