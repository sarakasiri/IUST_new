import react from 'react';

import Box from '@mui/material/Box';

const NoNotification = () => {
    return (
        <>
            <Box className={classes.totalFormBox}>
                <Box
                    sx={{
                        backgroundColor: "white"
                    }}
                ></Box>
            </Box>
        </>
    );
};

export default NoNotification;