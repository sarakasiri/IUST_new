import React, { useState } from "react";

import classes from "./styles/SecondStep.module.scss";

import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

import { Formik } from "formik";
import * as yup from "yup";

const useStyles = makeStyles({
    root: {
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        backgroundColor: '#ffffff',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    },
    checkedIcon: {
        backgroundColor: '#5919e0e3',
        backgroundImage: 'linear-gradient(180deg,hsla(1,100%,100%,.0),hsla(1,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 20%,transparent 30%)',
            content: '""',
        },
    },
});

function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

const SecondStep = (props) => {
    const [degree, setDegree] = useState();

    const handleDegreeForm = (degree) => {
        setDegree(degree);
    };

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const checkoutSchema = yup.object().shape({
        phdUniversty: yup.string().required("required"),
        phdFieldofStudy: yup.string().required("required"),
        phdDateOfGraduation: yup.string().required("required"),
        phdGpa: yup.string().required("required"),
        phdCountry: yup.string().required("required"),

        masterUniversty: yup.string().required("required"),
        masterFieldofStudy: yup.string().required("required"),
        masterDateOfGraduation: yup.string().required("required"),
        masterGpa: yup.string().required("required"),
        masterCountry: yup.string().required("required"),
    });

    const initialValues = {
        phdUniversty: "",
        phdFieldofStudy: "",
        phdDateOfGraduation: "",
        phdGpa: "",
        phdCountry: "",

        masterUniversty: "",
        masterFieldofStudy: "",
        masterDateOfGraduation: "",
        masterGpa: "",
        masterCountry: "",
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
                                        <FormControl fullWidth>
                                            <FormHelperText >Degree</FormHelperText>
                                            <RadioGroup row>
                                                <div className={classes.radioButtonBackground}>
                                                    <FormControlLabel
                                                        fullWidth
                                                        value={degree === 1}
                                                        onClick={() => handleDegreeForm(1)}
                                                        control={<StyledRadio />}
                                                        label={
                                                            <Typography sx={{ fontSize: "0.7rem", marginTop: "-0.5rem" }}>
                                                                Bachelor
                                                            </Typography>
                                                        }
                                                        labelPlacement="bottom"
                                                    />
                                                </div>
                                                <div className={classes.radioButtonBackground}>
                                                    <FormControlLabel
                                                        value={degree === 2}
                                                        onClick={(e) => handleDegreeForm(2)}
                                                        control={<StyledRadio value="Master" size="small" />}
                                                        label={
                                                            <Typography sx={{ fontSize: "0.7rem", marginTop: "-0.5rem" }}>
                                                                Master
                                                            </Typography>
                                                        }
                                                        labelPlacement="bottom"
                                                    />
                                                </div>
                                                <div className={classes.radioButtonBackground}>
                                                    <FormControlLabel
                                                        value={degree === 3}
                                                        onClick={(e) => handleDegreeForm(3)}
                                                        control={<StyledRadio size="small" />}
                                                        label={
                                                            <Typography sx={{ fontSize: "0.7rem", marginTop: "-0.5rem" }}>
                                                                Ph.D.
                                                            </Typography>
                                                        }
                                                        labelPlacement="bottom"
                                                    />
                                                </div>
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText >Nationality</FormHelperText>
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
                                            <FormHelperText >Nationality</FormHelperText>
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

                                </Grid>

                            </Box>


                            <Box className={classes.formBox}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "0.5rem",
                                    paddingTop: "0.8rem",
                                }}>
                                    <Typography style={{
                                        marginRight: "auto ",
                                        color: "#96a0b5",
                                        padding: "0 0.4rem"
                                    }}>
                                        Master's Degree
                                    </Typography>
                                    <div className={classes.menuItemDash}></div>
                                    <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                </div>
                                <Grid container xs={12}>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                University
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.phdUniversty}
                                                type="text"
                                                name="phdUniversty"
                                                error={!!touched.phdUniversty && !!errors.phdUniversty}
                                                sx={{
                                                    height: "2.8rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.phdUniversty && errors.phdUniversty}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                Field Of Study
                                            </FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.phdFieldofStudy}
                                                type="text"
                                                name="phdFieldofStudy"
                                                error={!!touched.phdFieldofStudy && !!errors.phdFieldofStudy}
                                                sx={{
                                                    height: "2.8rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                            </Select>
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.phdFieldofStudy && errors.phdFieldofStudy}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                Date Of Graduation
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.phdDateOfGraduation}
                                                type="text"
                                                name="phdDateOfGraduation"
                                                error={!!touched.phdDateOfGraduation && !!errors.phdDateOfGraduation}
                                                sx={{
                                                    height: "2.8rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.phdDateOfGraduation && errors.phdDateOfGraduation}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                GPA
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.phdGpa}
                                                type="text"
                                                name="phdGpa"
                                                error={!!touched.phdGpa && !!errors.phdGpa}
                                                sx={{
                                                    height: "2.8rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.phdGpa && errors.phdGpa}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                Country
                                            </FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.phdCountry}
                                                type="text"
                                                name="phdCountry"
                                                error={!!touched.phdCountry && !!errors.phdCountry}
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
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.phdCountry && errors.phdCountry}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                City
                                            </FormHelperText>
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
                                </Grid>
                            </Box>
                            <Box className={classes.formBox}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "0.5rem",
                                    paddingTop: "0.8rem",
                                }}>
                                    <Typography style={{
                                        marginRight: "auto ",
                                        color: "#96a0b5",
                                        padding: "0 0.4rem"
                                    }}>
                                        Master's Degree
                                    </Typography>
                                    <div className={classes.menuItemDash}></div>
                                    <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                </div>
                                <Grid container xs={12}>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                University
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.masterUniversty}
                                                type="text"
                                                name="masterUniversty"
                                                error={!!touched.masterUniversty && !!errors.masterUniversty}
                                                sx={{
                                                    height: "2.8rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.masterUniversty && errors.masterUniversty}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                Field Of Study
                                            </FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.masterFieldofStudy}
                                                type="text"
                                                name="masterFieldofStudy"
                                                error={!!touched.masterFieldofStudy && !!errors.masterFieldofStudy}
                                                sx={{
                                                    height: "2.8rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                            </Select>
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.masterFieldofStudy && errors.masterFieldofStudy}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                Date Of Graduation
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.masterDateOfGraduation}
                                                type="text"
                                                name="masterDateOfGraduation"
                                                error={!!touched.masterDateOfGraduation && !!errors.masterDateOfGraduation}
                                                sx={{
                                                    height: "2.8rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.masterDateOfGraduation && errors.masterDateOfGraduation}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                GPA
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.masterGpa}
                                                type="text"
                                                name="masterGpa"
                                                error={!!touched.masterGpa && !!errors.masterGpa}
                                                sx={{
                                                    height: "2.8rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.masterGpa && errors.masterGpa}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                Country
                                            </FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.masterCountry}
                                                type="text"
                                                name="masterCountry"
                                                error={!!touched.masterCountry && !!errors.masterCountry}
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
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.masterCountry && errors.masterCountry}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                City
                                            </FormHelperText>
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
                                </Grid>
                            </Box>

                            <Box className={classes.formBox}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "0.5rem",
                                    paddingTop: "0.8rem",
                                }}>
                                    <Typography style={{
                                        marginRight: "auto ",
                                        color: "#96a0b5",
                                        padding: "0 0.4rem"
                                    }}>
                                        High School
                                    </Typography>
                                    <div className={classes.menuItemDash}></div>
                                    <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                </div>
                                <Grid container xs={12}>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                Subject (Type Of Certificate)
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                type="text"
                                                sx={{
                                                    height: "2.8rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                Date Of Graduation
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                type="text"
                                                sx={{
                                                    height: "2.8rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                GPA
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                type="text"
                                                sx={{
                                                    height: "2.8rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                Country
                                            </FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                type="text"
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
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                City
                                            </FormHelperText>
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
                                </Grid>
                            </Box>

                            {degree === 2 && (<div></div>)}
                            {degree === 3 && (<div></div>)}

                        </form>
                    )}
                </Formik>
            </Box>
        </>
    );
};

export default SecondStep;