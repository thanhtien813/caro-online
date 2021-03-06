import React, { useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import LeftSection from '../LoginPage/LeftSection';
import FormSendEmail from '../ForgetPassPage/FormSendEmail';
import Loading from '../../components/Loading';

const SendEmail = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);

    return (
        <div className={classes.container}>
            <div className={classes.mark} />
            <Grid container>
                <Grid item xs={3} />
                <Grid className={classes.formSection} item xs={6}>
                    <Grid container>
                        <Grid className={classes.rightLine} item xs={6} >
                            <LeftSection text={'Login now'} pathLink="/login" />
                        </Grid>
                        <Grid className={classes.paddingRightSection} item xs={6}>
                            <FormSendEmail setLoading={setLoading}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} />
            </Grid>
            {loading && <Loading />}
        </div>
    )
}

const useStyles = makeStyles({
    container: {
        height: '100%',
        backgroundImage: "url('/assets/images/background.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    formSection: {
        backgroundColor: 'white',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '5px',
        zIndex: 3001,
        paddingBottom: '1%',
        paddingTop: '1%'
    },
    mark: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        position: 'absolute',
        zIndex: 3000,
        opacity: '0.6'
    },
    rightLine: {
        borderRight: 'solid',
        borderRightColor: 'gray',
        borderRightWidth: '1.5px'
    },
    paddingRightSection: {
        paddingTop: '1%',
        paddingLeft: '5%',
        paddingRight: '10%',
        paddingBottom: '1%'
    }
});

export default SendEmail;