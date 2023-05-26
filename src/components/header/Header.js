import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Header = ({ title }) => {
    return (
        <Box mb="30px">
            <Typography
                variant="h2"
                fontWeight="bold"
                sx={{ m: "0 0 5px 0" }}
            >
                {title}
            </Typography>
        </Box>
    );
};

export default Header;