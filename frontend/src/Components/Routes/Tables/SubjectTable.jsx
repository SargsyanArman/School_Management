import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from '@mui/material';
import { styled } from '@mui/system';
import { SUBJECT_HEADERS, STYLED_TABLE_CELL } from '../../../Constants/SubjectConstants';
import { TABLE_ACTIONS, TABLE_STYLES } from '../../../Constants/TableConstants'

const StyledTableCell = styled(TableCell)(({ theme }) => STYLED_TABLE_CELL(theme));

const SubjectTable = ({ subjects, handleAddOpen, handleEditOpen, handleDelete }) => {
    return (
        <>
            <Button variant="contained" color="primary" onClick={handleAddOpen} style={{ position: 'absolute', top: '130px', left: '410px' }}>
                +
            </Button>
            <TableContainer component={Paper} sx={{ width: '700px', margin: 'auto', mt: 5 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {SUBJECT_HEADERS.map((header, index) => (
                                <StyledTableCell key={header + index}>{header}</StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {subjects.map((subject) => (
                            <TableRow key={subject.id} sx={TABLE_STYLES}>
                                <TableCell>{subject.name}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="secondary" onClick={() => handleEditOpen(subject)}>
                                        {TABLE_ACTIONS.EDIT}
                                    </Button>
                                    <Button variant="contained" color="error" onClick={() => handleDelete(subject.id)} sx={{ ml: 1 }}>
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

export default SubjectTable;