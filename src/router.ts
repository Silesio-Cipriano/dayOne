import { Router } from 'express';
import { AllNoteController } from './controllers/AllNoteController';

import { CreateNoteController } from './controllers/CreateNoteController';

const router = Router();

const createNote = new CreateNoteController();
const allNote = new AllNoteController();

router.post('/note', createNote.handle);
router.get('/note', allNote.handle);

export { router };
