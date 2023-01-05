import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { ensureNote } from '../middlewares/ensureNote';
import { CreateNoteController } from '../modules/notes/useCases/createNote/CreateNoteController';
import { DeleteNoteController } from '../modules/notes/useCases/deleteNote/DeleteNoteController';
import { FindNoteController } from '../modules/notes/useCases/findNoteOfUser/FindNoteController';
import { ListEmojiController } from '../modules/notes/useCases/listEmoji/ListEmojiController';
import { ListNotesController } from '../modules/notes/useCases/listNotes/ListNotesController';
import { ListNotesByUserController } from '../modules/notes/useCases/listNotesByUser/ListNotesByUserController';
import { UpdateNoteController } from '../modules/notes/useCases/updateNote/UpdateNoteController';

const notesRoutes = Router();

const createNoteController = new CreateNoteController();
const deleteNoteController = new DeleteNoteController();
const listNotesController = new ListNotesController();
const listNotesByUserController = new ListNotesByUserController();
const updateNote = new UpdateNoteController();
const listEmojiController = new ListEmojiController();
const findNoteController = new FindNoteController();

notesRoutes.get('/', listNotesController.handle);
notesRoutes.get('/reaction_emoji', listEmojiController.handle);
notesRoutes.use(ensureAuthenticated);
notesRoutes.get('/user', listNotesByUserController.handle);
notesRoutes.get('/:id', findNoteController.handle);
notesRoutes.post('/', createNoteController.handle);
notesRoutes.delete('/:id', ensureNote, deleteNoteController.handle);
notesRoutes.put('/:id', ensureNote, updateNote.handle);

export { notesRoutes };
