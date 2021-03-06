import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const Message = ({isX = false, isSender = false, content, username, time}) => {
    const classes = useStyle();
    const color = isX ? '#b71c1c' : '#2f78f7';
    const justify = isSender ? 'flex-end' : 'flex-start';
    return (
      <div className={classes.container} style={{justifyContent: justify}}>
        <div className={classes.message}>
          <Typography className={classes.user}>{username} {time !== undefined ? ` - ${time}` : null}</Typography>
          <Typography className={classes.content} style={{backgroundColor: color}} >{content}</Typography>
        </div>
      </div>
    );
}

const useStyle = makeStyles({
  container: {
    width: '100%',
    display: 'flex',
    marginBottom: '5%'
  },
  message: {
    display: 'flex',
    flexDirection: 'column',
    width: '55%',
    marginLeft: '3.5%',
    marginRight: '3.5%',
  },
  content: {
    paddingLeft: '2%',
    paddingRight: '2%',
    paddingTop: '1%',
    paddingBottom: '1%',
    borderRadius: '5px',
    color: 'white',
    wordBreak: 'break-word'
  },
  user: {
    paddingLeft: '2%',
    color: '#111111',
    fontSize: 12
  }
});

export default Message;