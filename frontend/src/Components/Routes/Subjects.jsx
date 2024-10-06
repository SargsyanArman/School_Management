import React, { useEffect, useState } from 'react';
import {
    Container,
    Typography,
    CircularProgress,
} from '@mui/material';
import axios from 'axios';
import AddSubject from './Adding/AddSubject';
import SubjectEdit from './Tools/SubjectEdit'
import SubjectTable from './Tables/SubjectTable';
import {
    handleAddOpen,
    handleAddClose,
    handleDelete,
    handleAddSubjectSuccess,
    handleEditOpen,
    handleEditClose,
    handleEditSave,
} from '../../Constants/SubjectConstants';
import UnauthorizedPage from './UnauthorizedPage';
import { useSelector } from 'react-redux';


const Subjects = () => {
    const user = useSelector((state) => state.user);
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState(null);

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const response = await axios.get('http://localhost:8081/subjects');
                setSubjects(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching subjects');
                setLoading(false);
            }
        };

        fetchSubjects();
    }, []);

    if (loading) return <CircularProgress color="primary" />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <>
            {user ? <Container maxWidth="lg" sx={{ my: 4 }}>
                <Typography variant="h4" gutterBottom align="center">Subjects</Typography>
                <SubjectTable subjects={subjects} handleAddOpen={handleAddOpen(setOpenAddDialog)} handleDelete={handleDelete(subjects, setSubjects)}
                    handleEditOpen={handleEditOpen(setSelectedSubject, setOpenEditDialog)} />
                <AddSubject open={openAddDialog} handleClose={handleAddClose(setOpenAddDialog)} onSuccess={() => handleAddSubjectSuccess(setSubjects)} />
                <SubjectEdit open={openEditDialog} handleEditClose={handleEditClose(setOpenEditDialog, setSelectedSubject)} selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject}
                    handleEditSave={() => handleEditSave(selectedSubject, setSubjects, handleEditClose(setOpenEditDialog, setSelectedSubject))} />
            </Container > : <UnauthorizedPage />}
        </>
    );
};

export default Subjects;
