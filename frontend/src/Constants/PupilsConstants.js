import { styled, TableCell } from "@mui/material";
import axios from "axios";
import { API_BASE_URL } from "./GeneralConstants";

// Styled component for table cells with custom styling
export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

// Array of grade options from 1 to 10 for selection
export const GRADE_OPTIONS = Array.from({ length: 10 }, (_, index) => ({
    label: `Grade ${index + 1}`,
    value: index + 1,
}));

// Headers for displaying pupil data in a table
export const PUPIL_TABLE_HEADERS = ['Name', 'Grade', 'Subjects', 'Actions'];

// Constants defining table headers for pupil data
export const TABLE_HEADERS = [
    { label: 'Name', key: 'pupils_name' },
    { label: 'Grade', key: 'grades_name' },
    { label: 'Subjects', key: 'all_subjects' },
    { label: 'Actions', key: 'actions' },
];

// Function to handle successful addition of subjects and re-fetch pupil data
export const handleAddSubjectSuccess = async (setUsers) => {
    const response = await axios.get(`${API_BASE_URL}/pupils`);
    setUsers(response.data);
};

// Function to prepare the edit form for a selected user
export const handleEditOpen = (user, setSelectedUser, setOpen) => {
    setSelectedUser({
        pupils_id: user.pupils_id,
        pupils_name: user.pupils_name,
        grades_id: user.grades_id,
    });
    setOpen(true);
};

// Function to close the edit dialog and clear selected user data
export const handleEditClose = (setOpen, setSelectedUser) => {
    setOpen(false);
    setSelectedUser(null);
};

// Function to save the edited pupil data and update the user list
export const handleEditSave = async (selectedUser, setUsers, handleEditClose) => {
    if (!selectedUser) return;
    try {
        await axios.put(`${API_BASE_URL}/pupils/${selectedUser.pupils_id}`, {
            pupils_name: selectedUser.pupils_name,
            grades_id: selectedUser.grades_id,
        });
        const response = await axios.get(`${API_BASE_URL}/pupils`);
        setUsers(response.data);
        handleEditClose();
    } catch (err) {
        console.error('Error updating user:', err);
    }
};

// Function to delete a pupil from the list and update state
export const handleDelete = async (userId, users, setUsers) => {
    try {
        await axios.delete(`${API_BASE_URL}pupils/${userId}`);
        setUsers(users.filter(user => user.pupils_id !== userId));
    } catch (err) {
        console.error('Error deleting user:', err);
    }
};

// Function to handle input change and update state accordingly
export const handleChange = (values, setValues) => (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value
    });
};

// Function to handle form submission for creating a new pupil
export const handleSubmit = async (values, setValues, handleClose, onSuccess) => {
    try {
        const res = await axios.post(`${API_BASE_URL}/pupils`, values);
        if (res.data.status === "Success") {
            setValues({ name: '', grade_id: 1 });
            handleClose();
            onSuccess();
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.error('Error creating pupil:', err);
        return false;
    }
};
