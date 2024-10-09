// PupilEdit.jsx
import React from 'react';
import {
    Modal,
    Container,
    Typography,
    TextField,
    Select,
    MenuItem,
    Button,
} from '@mui/material';

const PupilEdit = ({ open, onClose, selectedUser, setSelectedUser, onSave }) => {
    const handleSave = () => {
        onSave(selectedUser);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Container sx={{ mt: 4, bgcolor: 'white', padding: 4, borderRadius: 2 }}>
                <Typography variant="h5">Edit User</Typography>
                <TextField
                    label="Name"
                    fullWidth
                    margin="dense"
                    value={selectedUser?.pupils_name || ''}
                    onChange={(e) => setSelectedUser({ ...selectedUser, pupils_name: e.target.value })}
                />
                <Select
                    label="Class ID"
                    fullWidth
                    margin="dense"
                    value={selectedUser?.grades_id || ''}
                    onChange={(e) => setSelectedUser({ ...selectedUser, grades_id: e.target.value })}
                >
                    {Array.from({ length: 10 }, (_, index) => (
                        <MenuItem key={index + 1} value={index + 1}>
                            {index + 1}
                        </MenuItem>
                    ))}
                </Select>
                <Button onClick={handleSave} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Save
                </Button>
            </Container>
        </Modal>
    );
};

export default PupilEdit;
