import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import AddPupil from './Adding/AddPupil';
import PupilEdit from './Tools/PupilEdit';
import PupilsTable from './Tables/PupilTable';
import { handleAddSubjectSuccess, handleEditOpen, handleEditClose, handleEditSave, handleDelete, API_BASE_URL } from '../../Constants/PupilsConstants';
import UnauthorizedPage from './UnauthorizedPage';

const Pupils = () => {
    const user = useSelector((state) => state.user);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [openAddDialog, setOpenAddDialog] = useState(false);

    const handleAddOpen = () => setOpenAddDialog(true);
    const handleAddClose = () => setOpenAddDialog(false);
    const handleEditCloseWrapper = () => handleEditClose(setOpen, setSelectedUser);

    const handleEditSaveWrapper = async () => {
        await handleEditSave(selectedUser, setUsers, handleEditCloseWrapper);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(API_BASE_URL);
                setUsers(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching users');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <CircularProgress color="primary" />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <>
            {user ?
                <Container maxWidth="lg" sx={{ my: 4 }}>
                    <Typography variant="h4" gutterBottom align="center">Pupils</Typography>
                    <Button variant="contained" color="primary" onClick={handleAddOpen} sx={{ my: 1 }}> + </Button>
                    <PupilsTable users={users} handleEditOpen={(user) => handleEditOpen(user, setSelectedUser, setOpen)} handleDelete={handleDelete} setUsers={setUsers} />
                    <AddPupil open={openAddDialog} handleClose={handleAddClose} onSuccess={() => handleAddSubjectSuccess(setUsers)} />
                    <PupilEdit open={open} onClose={handleEditCloseWrapper} selectedUser={selectedUser} setSelectedUser={setSelectedUser} onSave={handleEditSaveWrapper} />
                </Container>
                : <UnauthorizedPage />
            }
        </>
    );
};

export default Pupils;
