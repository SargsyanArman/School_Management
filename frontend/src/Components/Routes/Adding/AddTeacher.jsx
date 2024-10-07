import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { handleChange, handleSubmit } from '../../../Constants/TeachersConstants';
import { API_BASE_URL } from '../../../Constants/GeneralConstants';

const AddTeacher = ({ open, handleClose, onSuccess }) => {
    const [values, setValues] = useState({
        name: '',
        subjectId: '',
    });
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}subjects`);
                setSubjects(response.data);
            } catch (err) {
                console.log('Error fetching subjects:', err);
            }
        };

        fetchSubjects();
    }, []);

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New Teacher</DialogTitle>
            <DialogContent>
                <Container>
                    <form onSubmit={(event) => handleSubmit(event, values, setValues, handleClose, onSuccess)}>
                        <TextField label="Name" name="name" value={values.name} fullWidth margin="normal" required
                            onChange={handleChange(values, setValues)} />

                        <FormControl fullWidth margin="normal" required>
                            <Select name="subjectId" value={values.subjectId}
                                onChange={handleChange(values, setValues)} >
                                {subjects.map(subject => (
                                    <MenuItem key={subject.id} value={subject.id}>{subject.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <DialogActions>
                            <Button onClick={handleClose} color="primary">Cancel</Button>
                            <Button type="submit" variant="contained" color="primary">Add Teacher</Button>
                        </DialogActions>
                    </form>
                </Container>
            </DialogContent>
        </Dialog>
    );
};

export default AddTeacher;
