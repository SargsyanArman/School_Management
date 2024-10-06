import express from 'express';
import {
    getSubjects,
    addSubject,
    updateSubject,
    deleteSubject,
} from '../controllers/subjectController.js'

const router = express.Router();

router.get('/', getSubjects);
router.post('/', addSubject);
router.put('/:id', updateSubject);
router.delete('/:id', deleteSubject);

export default router