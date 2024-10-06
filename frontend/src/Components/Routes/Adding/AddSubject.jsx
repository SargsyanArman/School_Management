import React, { useState } from 'react';
import { TextField, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar } from '@mui/material';
import axios from 'axios';

const AddSubject = ({ open, handleClose, onSuccess }) => {
    const [values, setValues] = useState({
        name: '',
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:8081/subjects', values);

            if (res.data.status === "Success") {
                setSnackbarMessage('Subject created successfully');
                setSnackbarSeverity('success');
                setValues({ name: '' });
                handleClose();
                onSuccess();
            } else {
                setSnackbarMessage('Failed to create subject');
                setSnackbarSeverity('error');
            }
            setSnackbarOpen(true);
        } catch (err) {
            console.log(err);
            setSnackbarMessage('An error occurred');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new subject</DialogTitle>
                <DialogContent>
                    <Container>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                required
                            />
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button type="submit" variant="contained" color="primary">
                                    Add Subject
                                </Button>
                            </DialogActions>
                        </form>
                    </Container>
                </DialogContent>
            </Dialog>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
                severity={snackbarSeverity}
            />
        </>
    );
};

export default AddSubject;
