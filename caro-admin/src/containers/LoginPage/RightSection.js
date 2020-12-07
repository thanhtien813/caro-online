import React from 'react';
import { Button, makeStyles, TextField, Typography, withStyles } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';


const RightSection = () => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <Typography className={classes.login}>Log In</Typography>
            <CssTextField className={classes.username} 
                placeholder='Username'
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle style={{fontSize: '1.3rem'}} />
                      </InputAdornment>
                    ),
                }}
            />
            <CssTextField className={classes.password} 
                placeholder='Password'
                type='password'
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon style={{fontSize: '1.3rem'}} />
                      </InputAdornment>
                    ),
                }}
            />
            <ColorButton className={classes.loginButton} variant="contained" color="primary">
                Login
            </ColorButton>       
        </div>
    );
}

const ColorButton = withStyles((theme) => ({
    root: {
      color: 'white',
      backgroundColor: 'dodgerblue',
      '&:hover': {
        backgroundColor: 'dodgerblue',
      },
    },
}))(Button);

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'black',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'black',
        },
      },
    },
})(TextField);

const useStyle = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    login: {
        fontFamily: 'RussoOne',
        fontSize: '2em'
    },
    username: {
        marginTop: '10%'
    },
    password: {
        marginTop: '7%'
    },
    loginButton: {
        marginTop: '8%',
        width: '40%'
    },
    otherLogin: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '10%'
    },
    otherLoginText: {
        fontWeight: 'bold',
        fontSize: '0.9em',
        color: 'dimgray',
    },
    icon: {
        width: '7%',
        marginLeft: '5%',
        cursor: 'pointer'
    }
});

export default RightSection;