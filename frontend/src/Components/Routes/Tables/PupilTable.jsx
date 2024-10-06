// PupilsTable.jsx
import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button,
} from '@mui/material';
import { StyledTableCell, TABLE_HEADERS } from '../../../Constants/PupilsConstants';
import { TABLE_ACTIONS, TABLE_STYLES } from '../../../Constants/TableConstants';

const PupilsTable = ({ users, handleEditOpen, handleDelete, setUsers }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {TABLE_HEADERS.map((header) => (
                            <StyledTableCell key={header.key}>{header.label}</StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((userDetails) => (
                        <TableRow key={userDetails.pupils_id} sx={TABLE_STYLES}>
                            {TABLE_HEADERS.map((header) => (
                                header.key !== 'actions' ? (
                                    <TableCell key={header.key}>
                                        {userDetails[header.key]}
                                    </TableCell>
                                ) : (
                                    <TableCell key="actions">
                                        <Button variant="contained" color="secondary" onClick={() => handleEditOpen(userDetails)}>
                                            {TABLE_ACTIONS.EDIT}
                                        </Button>
                                        <Button variant="contained" color="error" onClick={() => handleDelete(userDetails.pupils_id, users, setUsers)} sx={{ ml: 1 }}>
                                            {TABLE_ACTIONS.DELETE}
                                        </Button>
                                    </TableCell>
                                )
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PupilsTable;
