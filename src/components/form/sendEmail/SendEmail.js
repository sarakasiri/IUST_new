import React, { useState } from 'react';

import classes from './styles/SendEmail.module.scss';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Link } from 'react-router-dom';

const SignUp = () => {

    return (
        <>
            <Container>
                <Box className={classes.loginBox} >
                    <Grid container columns={12} spacing={1}>
                        <Grid item xs={6}></Grid>

                        <Grid item xs={11} className={classes.loginForm}>
                            <Typography marginBottom={"0.4rem"} >check your email</Typography>
                            <Typography >we sent a password reset link to</Typography>
                            <Typography marginBottom={"2rem"}></Typography>


                            <Button
                                fullWidth
                                type='submit'
                                className={classes.loginBtn}
                            >
                                ok! Back To Login
                            </Button>
                            <Typography>don't receive an email?
                                {/* <Link>
                                    resend it
                                </Link> */}
                                <span>signup</span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default SignUp;