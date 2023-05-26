import react from 'react';

import classes from './styles/ApplyList.module.scss';

import { DataGrid } from "@mui/x-data-grid";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ticketsColumns = [
    {
        field: 'request id',
        headerName: 'request id',
        width: 200
    },
    {
        field: 'date',
        headerName: 'date',
        width: 230,
    },
    {
        field: 'field',
        headerName: 'field',
        width: 250,

    },
    {
        field: 'degree',
        headerName: 'degree',
        width: 230,

    },
    {
        field: 'university approved',
        headerName: 'university approved',
        width: 290,
    },
    {
        field: 'university approved',
        headerName: 'university approved',
        width: 260,
    },
];

const ticketsRows = [
    { id: 1, requestId: 1, date: 'Snow', field: 'Jon', },
    { id: 2, requestId: 2, date: 'Snow', field: 'Jon', },
];

const ApplyList = () => {
    return (
        <>
            <Box className={classes.totalFormBox}>
                <Box
                    height="30vh"
                    width="95%"
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "0.5rem",
                        padding: "2rem",
                        "& .MuiDataGrid-root": {
                            borderBottom: "none",
                            borderLeft: "none",
                            borderRight: "none",
                            color: " #a5a0b7",
                        },
                        "& .MuiDataGrid-cell": {
                            border: "none !important",
                        },
                        "& .name-column--cell": {
                            color: "red",
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            display: "flex !important",
                            justifyContent: "space-between !important",
                        },
                        "& .MuiDataGrid-columnHeadersTitle": {
                            display: "flex !important",
                            justifyContent: "space-between !important",
                            marginLeft: "5rem"
                        },
                        "& .MuiDataGrid-footerContainer": {
                            backgroundColor: "white",
                            display: "none !important"
                        },
                    }}
                >
                    <Typography
                        className={classes.title}
                    >
                        Apply List
                    </Typography>
                    <DataGrid rows={ticketsRows} columns={ticketsColumns} />
                </Box>
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
                            + New Application
                        </Typography>
                    </Button>
                </div>
            </Box>
        </>
    );
};

export default ApplyList;