import React from 'react';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    Paper,
    Button,
    TableCell,
    TableContainer,
} from '@mui/material';
import { StyledTableCell, columns } from '../../../Constants/TeachersConstants';
import { TABLE_ACTIONS, TABLE_STYLES } from '../../../Constants/TableConstants';


const TeacherTable = ({ users, handleEditOpen, handleDelete, handleAddTeacherOpen }) => {
    return (
        <>
            <Button variant="contained" color="primary" onClick={handleAddTeacherOpen} sx={{ my: 1 }}>
                +
            </Button>
            <TableContainer component={Paper} sx={{ margin: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <StyledTableCell key={column.id}>{column.label}</StyledTableCell>
                            ))}
                            <StyledTableCell sx={{ paddingLeft: 8 }}>Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((userDetails) => (
                            <TableRow
                                key={userDetails.teacher_id}
                                sx={TABLE_STYLES

                                }
                            >
                                {columns.map((column) => (
                                    <TableCell key={column.id}>{userDetails[column.id] || 'None'}</TableCell>
                                ))}
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleEditOpen(userDetails)}
                                    >
                                        {TABLE_ACTIONS.EDIT}

                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => handleDelete(userDetails.teacher_id)}
                                        sx={{ ml: 1 }}
                                    >
                                        {TABLE_ACTIONS.DELETE}
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default TeacherTable;