import React from "react";

import classes from "./styles/FifthStep.module.scss";

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
};

const FifthStep = () => {
    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const checkoutSchema = yup.object().shape({
        firstName: yup.string().required("required"),
    });

    const initialValues = {
        firstName: "",
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
                                    <Typography style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Biography</Typography>
                                    <div className={classes.menuItemDash}></div>
                                    <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                </div>
                                <Grid container xs={12}>
                                    <Grid item xs={3}>
                                        <FormControl fullWidth>
                                            <FormHelperText >Do you Hold Governmental/Institutional Scholarship For The Applied Program ?</FormHelperText>
                                            <RadioGroup row
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.firstName}
                                                name="firstName"
                                                error={!!touched.firstName && !!errors.firstName}
                                                helperText={touched.firstName && errors.firstName}
                                            >
                                                <div className={classes.radioButtonBackground}>
                                                    <FormControlLabel
                                                        fullWidth
                                                        value="yes"
                                                        control={<StyledRadio size="small" />}
                                                        label={
                                                            <Typography sx={{ fontSize: "0.7rem", marginTop: "-0.5rem" }}>
                                                                Yes
                                                            </Typography>
                                                        }
                                                        labelPlacement="bottom"
                                                    />
                                                </div>
                                                <div className={classes.radioButtonBackground}>
                                                    <FormControlLabel
                                                        className={classes.kiriRadio}
                                                        value="good"
                                                        control={<StyledRadio size="small"
                                                            sx={{
                                                                '&.Mui-checked': {
                                                                    border: "2rem sollid #5919e0e3",
                                                                    color: '#5919e0e3 !important',
                                                                },
                                                                '& .css-r5ex5e-MuiSvgIcon-root': {
                                                                    color: "red"
                                                                }
                                                            }} />}
                                                        label={
                                                            <Typography sx={{ fontSize: "0.7rem", marginTop: "-0.5rem" }}>
                                                                Male
                                                            </Typography>
                                                        }
                                                        labelPlacement="bottom"
                                                    />
                                                </div>
                                            </RadioGroup>
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.firstName && errors.firstName}
                                            </FormHelperText>
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

export default FifthStep;