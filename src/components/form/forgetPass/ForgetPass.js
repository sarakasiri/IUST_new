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
        firstName: yup.string().required("required"),
        password: yup.string().required("required"),
        email: yup.string().email("invalid email").required("required"),
    });

    const initialValues = {
        firstName: "",
        password: "",
        email: "",
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
                                    <Form
                                        onSubmit={handleSubmit}
                                        className={classes.form}
                                    >
                                        <Typography
                                            marginBottom={"0.4rem"}
                                            variant="h4"
                                        >
                                            Forgot Password?
                                        </Typography>
                                        <Typography
                                            marginBottom={"2rem"}
                                        >
                                            don't worry , we'll send you reset instructions.
                                        </Typography>

                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            type="text"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.password}
                                            name="firstName"
                                            error={!!touched.password && !!errors.password}
                                            helperText={touched.password && errors.password}
                                            // sx={{ marginBottom: "2rem" }}
                                            label={
                                                <div >
                                                    <span>your email address</span>
                                                </div>
                                            }
                                        ></TextField>

                                        <Button
                                            fullWidth
                                            type='submit'
                                            className={classes.loginBtn}
                                        >
                                            reset password
                                        </Button>
                                        <Typography>back to
                                            {/* <Link>
                                   login
                                </Link> */}
                                            <span>signup</span>
                                        </Typography>
                                    </Form>
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