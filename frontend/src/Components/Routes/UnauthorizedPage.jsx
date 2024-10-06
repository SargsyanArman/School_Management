import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const UnauthorizedPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#f5f5f5',
                textAlign: 'center',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Access Denied
            </Typography>
            <Typography variant="body1" gutterBottom>
                You do not have permission to view this page.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/signin"
            >
                Go to Login
            </Button>
        </Box>
    );
};

export default UnauthorizedPage;
