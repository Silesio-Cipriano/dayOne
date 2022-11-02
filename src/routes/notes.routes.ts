import { Router } from 'express';
import { AllNoteController } from '../controllers/AllNoteController';

// import { CreateNoteController } from '../controllers/CreateNoteController';
import { DeleteNoteController } from '../controllers/DeleteNoteController';
import { GetNoteController } from '../controllers/GetNoteController';
import { UpdateNoteController } from '../controllers/UpdateNoteController';
import { ensureNote } from '../middlewares/ensureNote';
import { CreateNoteController } from '../modules/notes/useCases/createNote/CreateNoteController';

const notesRoutes = Router();

// const createNote = new CreateNoteController();
const createNoteController = new CreateNoteController();
const allNote = new AllNoteController();
const getNote = new GetNoteController();
const deleteNote = new DeleteNoteController();
const updateNote = new UpdateNoteController();

// notesRoutes.post('/', createNote.handle);
notesRoutes.post('/', createNoteController.handle);
notesRoutes.get('/', allNote.handle);
notesRoutes.get('/:id', ensureNote, getNote.handle);
notesRoutes.delete('/:id', ensureNote, deleteNote.handle);
notesRoutes.put('/:id', ensureNote, updateNote.handle);

export { notesRoutes };
