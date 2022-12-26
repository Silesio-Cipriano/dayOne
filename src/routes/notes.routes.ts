import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { ensureNote } from '../middlewares/ensureNote';
import { CreateNoteController } from '../modules/notes/useCases/createNote/CreateNoteController';
import { DeleteNoteController } from '../modules/notes/useCases/deleteNote/DeleteNoteController';
import { ListNotesController } from '../modules/notes/useCases/listNotes/ListNotesController';
import { UpdateNoteController } from '../modules/notes/useCases/updateNote/UpdateNoteController';

const notesRoutes = Router();

const createNoteController = new CreateNoteController();
const deleteNoteController = new DeleteNoteController();
const listNotesController = new ListNotesController();
const updateNote = new UpdateNoteController();

notesRoutes.get('/', listNotesController.handle);
notesRoutes.use(ensureAuthenticated);
notesRoutes.post('/', createNoteController.handle);
notesRoutes.delete('/:id', ensureNote, deleteNoteController.handle);
notesRoutes.put('/:id', ensureNote, updateNote.handle);

export { notesRoutes };
