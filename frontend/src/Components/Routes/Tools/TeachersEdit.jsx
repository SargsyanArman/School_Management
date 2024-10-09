// TeachersEdit.jsx
import React from 'react';
import {
    Container,
    Typography,
    TextField,
    Select,
    MenuItem,
    Button,
    Modal,
} from '@mui/material';

const TeachersEdit = ({ open, handleEditClose, selectedUser, setSelectedUser, handleEditSave, subjects }) => {
    return (
        <Modal open={open} onClose={handleEditClose}>
            <Container sx={{ mt: 4, bgcolor: 'white', padding: 4, borderRadius: 2 }}>
                <Typography variant="h5">Edit User</Typography>
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    value={selectedUser?.teachers_name || ''}
                    onChange={(e) => setSelectedUser({ ...selectedUser, teachers_name: e.target.value })}
                />
                <Select
                    fullWidth
                    margin="dense"
                    value={selectedUser?.subjects || ''}
                    onChange={(e) => setSelectedUser({ ...selectedUser, subjects: e.target.value })}
                >
                    <MenuItem value="">
                        <em>Select Subject</em>
                    </MenuItem>
                    {subjects.map((subject) => (
                        <MenuItem key={subject.id} value={subject.id}>
                            {subject.name}
                        </MenuItem>
                    ))}
                </Select>
                <Button onClick={handleEditSave} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Save
                </Button>
            </Container>
        </Modal>
    );
};

export default TeachersEdit;   