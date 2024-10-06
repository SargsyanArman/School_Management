// SubjectEdit.jsx

import React from 'react';
import { Modal, Container, Typography, TextField, Button } from '@mui/material';

const SubjectEdit = ({ open, handleEditClose, selectedSubject, setSelectedSubject, handleEditSave }) => {
    return (
        <Modal open={open} onClose={handleEditClose}>
            <Container sx={{ mt: 4, bgcolor: 'white', padding: 4, borderRadius: 2 }}>
                <Typography variant="h5">Edit Subject</Typography>
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    value={selectedSubject?.name || ''}
                    onChange={(e) => setSelectedSubject({ ...selectedSubject, name: e.target.value })}
                />
                <Button onClick={handleEditSave} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Save
                </Button>
            </Container>
        </Modal>
    );
};

export default SubjectEdit;
