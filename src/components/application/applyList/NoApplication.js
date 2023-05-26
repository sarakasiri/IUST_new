import react from 'react';

import classes from './styles/NoApplication.module.scss';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NoApplication = () => {
    return (
        <>
            <Box className={classes.totalFormBox}>
                <Box
                    sx={{
                        backgroundColor: "white"
                    }}
                ></Box>
                <div className={classes.ticketsButton}>
                    <Button
                        style={{
                            width: "11%",
                            margin: "2rem 1rem 1rem 2rem",
                            borderRadius: "0.5rem",
                            border: "none",
                            backgroundColor: "#2c1970"
                        }}
                    >
                        <Typography
                            style={{
                                padding: "0.9rem",
                                color: "#ffffff"
                            }}
                        >
                            + New Ticket
                        </Typography>
                    </Button>
                </div>
            </Box>
        </>
    );
};

export default NoApplication;