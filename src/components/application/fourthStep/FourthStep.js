import React, { useState } from "react";

import classes from "./styles/FourthStep.module.scss";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { Formik } from "formik";
import * as yup from "yup";

const FourthStep = () => {
    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const checkoutSchema = yup.object().shape({
        phdUniversty: yup.string().required("required"),
    });

    const initialValues = {
        phdUniversty: "",
    };
    return (
        <>
            <Box className={classes.totalFormBox}>
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
                        <form onSubmit={handleSubmit} >
                            <Box className={classes.formBox}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "0.5rem",
                                    paddingTop: "0.8rem",
                                }}>
                                    <Typography style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Program Request</Typography>
                                    <div className={classes.menuItemDash}></div>
                                    <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                </div>
                                <Grid container xs={12}>

                                    <Grid item xs={3}>
                                        <input type="file" />
                                        <label></label>
                                    </Grid>


                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth rows={10}>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                Please Specify
                                            </FormHelperText>
                                            <OutlinedInput
                                                aria-label="close"
                                                className={classes.stepsTextField}
                                                type="file"
                                                title="  "
                                                sx={{
                                                    width: "16rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>

                                </Grid>

                            </Box>

                        </form>
                    )}
                </Formik>
            </Box>
        </>
    );
};

export default FourthStep;