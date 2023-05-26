import React, { useState } from 'react';

import classes from './styles/NewPass.module.scss';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Link } from 'react-router-dom';

import { Form, Formik } from "formik";
import * as yup from "yup";

const NewPass = () => {

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const checkoutSchema = yup.object().shape({
        password: yup.string().required("required"),
        passwordConfirmation: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
    });

    const initialValues = {
        password: "",
        passwordConfirmation: "",
    };

    return (
        <>
            {/* <Container> */}

            <Box className={classes.loginBox} >
                <Grid container columns={12} >
                    <Grid item xs={6}></Grid>
                    <Box className={classes.loginBox}>
                        <Grid item xs={12} className={classes.loginForm}>

                            <Formik
                                onSubmit={handleFormSubmit}
                                initialValues={initialValues}
                                validationSchema={checkoutSchema}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleBlur,
                                    handleChange,
                                    handleSubmit,
                                }) => (
                                    <form
                                        onSubmit={handleSubmit}
                                        className={classes.form}
                                    >
                                        <Typography
                                            marginBottom={"0.4rem"}
                                            variant="h4"
                                        >Login</Typography>
                                        <Typography marginBottom={"2rem"}>to register an application.</Typography>

                                        <div className={classes.buttons}>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                type="text"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.password}
                                                name=" password"
                                                error={!!touched.password && !!errors.password}
                                                helperText={touched.password && errors.password}
                                                // sx={{ marginBottom: "2rem" }}
                                                label={
                                                    <div >
                                                        <span>password</span>
                                                    </div>
                                                }
                                            ></TextField>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                type="text"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.passwordConfirmation}
                                                name="passwordConfirmation"
                                                error={!!touched.passwordConfirmation && !!errors.passwordConfirmation}
                                                helperText={touched.passwordConfirmation && errors.passwordConfirmation}
                                                sx={{ marginLeft: "1.5rem" }}
                                                label={
                                                    <div >
                                                        <span>confirm password</span>
                                                    </div>
                                                }
                                            ></TextField>
                                        </div>

                                        <Button
                                            fullWidth
                                            type='submit'
                                            className={classes.loginBtn}
                                        >
                                            Login
                                        </Button>
                                        <Typography>don't have any account?
                                            {/* <Link>
                                    sign Up
                                </Link> */}
                                            <span>signup</span>
                                        </Typography>
                                    </form>
                                )}
                            </Formik>
                        </Grid>
                    </Box>

                </Grid>
            </Box>
            {/* </Container> */}
        </>
    );
};

export default NewPass;