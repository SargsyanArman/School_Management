import axios from 'axios';
import { styled, TableCell } from '@mui/material';
import { API_BASE_URL } from './GeneralConstants';

// Styled component
export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

// Fetches users and updates state for users, loading, and error
export const fetchUsers = async (setUsers, setLoading, setError) => {
    try {
        const response = await axios.get(`${API_BASE_URL}teachers`);
        const cleanedUsers = response.data.map(user => {
            const uniqueTeachers = Array.from(new Set(user.all_subjects.split(',').map(teacher => teacher.trim())));
            return { ...user, all_subjects: uniqueTeachers.join(', ') };
        });

        setUsers(cleanedUsers);
        setLoading(false);
    } catch (err) {
        setError('Error fetching users');
        setLoading(false);
    }
};

// Fetches subjects and updates the state for subjects
export const fetchSubjects = async (setSubjects) => {
    try {
        const response = await axios.get(`${API_BASE_URL}subjects`);
        setSubjects(response.data);
    } catch (err) {
        console.error('Error fetching subjects:', err);
    }
};

// Updates a user and closes the modal after success
export const handleEditSave = async (selectedUser, fetchUsers, handleEditClose) => {
    if (!selectedUser) return;

    try {
        await axios.put(`${API_BASE_URL}teachers/${selectedUser.teacher_id}`, {
            name: selectedUser.teachers_name,
            subjectId: selectedUser.subjects,
        });

        fetchUsers();
        handleEditClose();
    } catch (err) {
        console.error('Error updating user:', err);
    }
};

// Deletes a user by ID and updates the user list
export const handleDelete = async (userId, users, setUsers) => {
    try {
        await axios.delete(`${API_BASE_URL}teachers/${userId}`);
        setUsers(users.filter(user => user.teacher_id !== userId));
    } catch (err) {
        console.error('Error deleting user:', err);
    }
};

// Column definitions for the teacher's table
export const columns = [
    { id: 'teachers_name', label: 'Name' },
    { id: 'all_subjects', label: 'Subjects' },
];

// Handles input changes in the form
export const handleChange = (values, setValues) => (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
};

// Submits the form data to add a new teacher
export const handleSubmit = async (event, values, setValues, handleClose, onSuccess) => {
    event.preventDefault();
    try {
        const res = await axios.post(`${API_BASE_URL}teachers`, {
            name: values.name,
            subjectId: values.subjectId,
        });

        if (res.data.status === "Success") {
            alert('Teacher added successfully');
            setValues({ name: '', subjectId: '' });
            handleClose();
            onSuccess();
        } else {
            alert('Failed to add teacher');
        }
    } catch (err) {
        console.log(err);
    }
};
