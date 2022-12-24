import { Router } from 'express';
import { CreateNoteController } from './modules/notes/useCases/createNote/CreateNoteController';
import { ListNotesController } from './modules/notes/useCases/listNotes/ListNotesController';

const router = Router();

const createNote = new CreateNoteController();
const listNotes = new ListNotesController();

router.post('/note', createNote.handle);
router.get('/note', listNotes.handle);

export { router };
