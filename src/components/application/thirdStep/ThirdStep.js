import React, { useState } from "react";

import classes from "./styles/ThirdStep.module.scss";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import { Formik } from "formik";
import * as yup from "yup";

const ThirdStep = () => {
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
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText >Occupation</FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                sx={{
                                                    height: "2.8rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText >Organization</FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                sx={{
                                                    height: "2.8rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText >Country</FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                label="vbhjkl"
                                                sx={{
                                                    height: "2.8rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText >City</FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                label="vbhjkl"
                                                sx={{
                                                    height: "2.8rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={3}></Grid>

                                    <Grid item xs={3}></Grid>

                                    <Grid item xs={12}>
                                        <FormControl variant="outlined" fullWidth rows={10}>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                Please Specify
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                type="textArea"
                                                minRows={10}
                                                sx={{
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

export default ThirdStep;