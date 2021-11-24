import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    alert: {
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2),
            size: "25px",
            width: '30%',
            margin: 2
        },
        padding: theme.spacing(2),
        size: "25px",
        width: '100%',
        margin: 2
    }
}))

const Alerts = ({ msg }) => {
    const classes = useStyles();

    return (
        <Stack sx={{ m: '8px', }} className={classes.alert}>
            <Alert variant="outlined" severity="warning">
                {msg}
            </Alert>
        </Stack>
    );
}

export default Alerts