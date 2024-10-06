import express from 'express';
import {
    getPupils,
    addPupil,
    updatePupil,
    deletePupil,
} from '../controllers/pupilController.js'

const router = express.Router();

router.get('/', getPupils);
router.post('/', addPupil);
router.put('/:id', updatePupil);
router.delete('/:id', deletePupil);

export default router;
