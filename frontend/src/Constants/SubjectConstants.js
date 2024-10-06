import axios from 'axios';
// Table header names
export const SUBJECT_HEADERS = ['Name', 'Actions'];

// Table cell styles
export const STYLED_TABLE_CELL = (theme) => ({
    backgroundColor: theme.palette.primary,
    color: theme.palette.common,
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: theme.palette.primary,
    },
});

// src/Constants/SubjectsConstants.js

// Opens the dialog for adding a new subject
export const handleAddOpen = (setOpenAddDialog) => () => {
    setOpenAddDialog(true);
};

// Closes the dialog for adding a new subject
export const handleAddClose = (setOpenAddDialog) => () => {
    setOpenAddDialog(false);
};

// Deletes a subject by its ID and updates the subject list
export const handleDelete = (subjects, setSubjects) => async (subjectId) => {
    try {
        await axios.delete(`http://localhost:8081/subjects/${subjectId}`);
        setSubjects(subjects.filter(subject => subject.id !== subjectId));
    } catch (err) {
        console.error('Error deleting subject:', err);
    }
};

// Fetches updated subjects list after a successful addition
export const handleAddSubjectSuccess = async (setSubjects) => {
    const response = await axios.get('http://localhost:8081/subjects');
    setSubjects(response.data);
};

// Opens the dialog for editing a selected subject
export const handleEditOpen = (setSelectedSubject, setOpenEditDialog) => (subject) => {
    setSelectedSubject(subject);
    setOpenEditDialog(true);
};

// Closes the dialog for editing and resets the selected subject
export const handleEditClose = (setOpenEditDialog, setSelectedSubject) => () => {
    setOpenEditDialog(false);
    setSelectedSubject(null);
};

// Saves the edited subject and updates the subject list
export const handleEditSave = async (selectedSubject, setSubjects, handleEditClose) => {
    if (!selectedSubject) return;

    try {
        await axios.put(`http://localhost:8081/subjects/${selectedSubject.id}`, {
            name: selectedSubject.name,
        });

        const response = await axios.get('http://localhost:8081/subjects');
        setSubjects(response.data);
        handleEditClose();
    } catch (err) {
        console.error('Error updating subject:', err);
    }
};  
