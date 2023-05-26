import react from 'react';

import classes from './styles/Help.module.scss';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const Notification = () => {
    return (
        <>
            <Box className={classes.totalFormBox}>
                <Box
                    sx={{
                        backgroundColor: "white",
                        padding: "1rem",
                        borderRadius: "0.5rem"
                    }}
                >
                    <Typography className={classes.title}>
                        have a question? check the blow
                    </Typography>
                    <div>
                        <Accordion className={classes.accordion}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className={classes.accordionSummary}
                            >
                                <Typography >Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails className={classes.accordionDetail}>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                                    congue mauris rhoncus aenean vel elit scelerisque.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.accordion}>
                            <AccordionSummary
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography >Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.accordion}>
                            <AccordionSummary
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.accordion}>
                            <AccordionSummary
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Box>
            </Box>
        </>
    );
};

export default Notification;