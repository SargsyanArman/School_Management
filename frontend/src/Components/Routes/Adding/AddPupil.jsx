import React, { useState } from 'react';
import { TextField, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select } from '@mui/material';
import { handleChange, handleSubmit } from '../../../Constants/PupilsConstants';


const AddPupil = ({ open, handleClose, onSuccess }) => {
    const [values, setValues] = useState({
        name: '',
        grade_id: 1
    });

    const onChange = (event) => handleChange(values, setValues)(event);

    const onSubmit = async (event) => {
        event.preventDefault();
        await handleSubmit(values, setValues, handleClose, onSuccess);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add new Pupil</DialogTitle>
            <DialogContent>
                <Container>
                    <form onSubmit={onSubmit}>
                        <TextField
                            label="Name"
                            name="name"
                            value={values.name}
                            onChange={onChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <Select
                            label="Grade"
                            name="grade_id"
                            value={values.grade_id}
                            onChange={onChange}
                            fullWidth
                            margin="normal"
                            required
                        >
                            {Array.from({ length: 12 }, (_, index) => (
                                <MenuItem key={index + 1} value={index + 1}>
                                    Grade {index + 1}
                                </MenuItem>
                            ))}
                        </Select>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" color="primary">
                                Add new Pupil
                            </Button>
                        </DialogActions>
                    </form>
                </Container>
            </DialogContent>
        </Dialog>
    );
};

export default AddPupil;


