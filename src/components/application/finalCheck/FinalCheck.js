import React from "react";

import classes from "./styles/FinalCheck.module.scss";

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

import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


const FinalCheck = () => {


    return (
        <>
            <Box className={classes.totalFormBox}>
                <Box className={classes.information}>
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
                    <Box className={classes.eachBox}>
                        <Typography className={classes.boxTitle}>Biography</Typography>
                        <Box className={classes.box}>
                            <Grid container xs={12} className={classes.bioInfo}>
                                <Grid item xs={3}>
                                    <Typography className={classes.eachTitle}>First Name</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography className={classes.eachTitle}>Last Name</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography className={classes.eachTitle}>Date Of Birth</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    );
};

export default FinalCheck;