import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleLoginSubmit, fields } from '../Constants/SignFormConstats';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => handleLoginSubmit(event, email, password, dispatch, navigate);

    return (
        <Container maxWidth="sm">
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" my={6.8}>
                <Typography variant="h4" gutterBottom>Login</Typography>
                <form onSubmit={handleSubmit}>
                    {fields.map(({ label, type, stateKey }) => (
                        <TextField
                            key={label}
                            label={label}
                            type={type}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={stateKey === 'email' ? email : password}
                            onChange={(e) => stateKey === 'email' ? setEmail(e.target.value) : setPassword(e.target.value)}
                        />
                    ))}
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
