import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Alerts = ({ msg }) => {

    return (
        <Stack sx={{ width: '30%', m: '8px' }} spacing={2}>
            <Alert variant="outlined" severity="warning">
                {msg}
            </Alert>
        </Stack>
    );
}

export default Alerts