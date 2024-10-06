import React from 'react';
import Button from '@mui/material/Button';
import { handleLogout } from '../Constants/SignFormConstats';

function Logout({ setUser }) {
    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={() => handleLogout(setUser)}
        >
            Logout
        </Button>
    );
}

export default Logout;
