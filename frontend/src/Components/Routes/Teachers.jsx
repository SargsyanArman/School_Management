import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Snackbar } from '@mui/material';
import { useSelector } from 'react-redux';
import AddTeacher from './Adding/AddTeacher';
import TeachersEdit from './Tools/TeachersEdit';
import { fetchUsers, fetchSubjects, handleEditSave, handleDelete } from '../../Constants/TeachersConstants';
import TeacherTable from './Tables/TeacherTable';
import UnauthorizedPage from './UnauthorizedPage';

const Teachers = () => {
    const user = useSelector((state) => state.user);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [addTeacherOpen, setAddTeacherOpen] = useState(false);
    const [subjects, setSubjects] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        fetchUsers(setUsers, setLoading, setError);
        fetchSubjects(setSubjects);
    }, []);

    const handleEditOpen = (user) => {
        setSelectedUser(user);
        setOpen(true);
    };

    const handleEditClose = () => {
        setOpen(false);
        setSelectedUser(null);
    };

    const handleAddTeacherOpen = () => {
        setAddTeacherOpen(true);
    };

    const handleAddTeacherClose = () => {
        setAddTeacherOpen(false);
    };

    const handleAddTeacherSuccess = () => {
        fetchUsers(setUsers, setLoading, setError);
        setAddTeacherOpen(false);
    };

    // Snackbar handlers
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const showSnackbar = (message) => {
        setSnackbarMessage(message);
        setSnackbarOpen(true);
    };

    if (loading) return <CircularProgress color="primary" />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <>
            {user ? (
                <Container maxWidth="lg" sx={{ my: 4 }}>
                    <Typography variant="h4" gutterBottom align="center">Teachers</Typography>
                    <TeacherTable users={users} handleEditOpen={handleEditOpen} handleAddTeacherOpen={handleAddTeacherOpen}
                        handleDelete={(teacherId) => handleDelete(teacherId, users, setUsers)} />
                    <TeachersEdit open={open} handleEditClose={handleEditClose} selectedUser={selectedUser} setSelectedUser={setSelectedUser} subjects={subjects} handleEditSave={() => handleEditSave(selectedUser, fetchUsers.bind(null, setUsers, setLoading, setError), handleEditClose, showSnackbar)} />
                    <AddTeacher open={addTeacherOpen} handleClose={handleAddTeacherClose} onSuccess={handleAddTeacherSuccess} />
                </Container>
            ) : (
                <UnauthorizedPage />
            )}

            <Snackbar open={snackbarOpen} onClose={handleSnackbarClose} message={snackbarMessage} autoHideDuration={6000} />
        </>
    );
};

export default Teachers;
