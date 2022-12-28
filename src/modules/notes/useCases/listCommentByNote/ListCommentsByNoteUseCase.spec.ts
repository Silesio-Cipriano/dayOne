import { CommentsRepositoryInMemory } from '../../repositories/in-memory/CommentsRepositoryInMemory';
import { NotesRepositoryInMemory } from '../../repositories/in-memory/NotesRepositoryInMemory';
import { ListCommentsByNoteUseCase } from './ListCommentsByNoteUseCase';

let notesRepositoryInMemory: NotesRepositoryInMemory;
let commentsRepositoryInMemory: CommentsRepositoryInMemory;
let listCommentsByNoteUseCase: ListCommentsByNoteUseCase;

describe('List comments by note', () => {
  beforeEach(() => {
    notesRepositoryInMemory = new NotesRepositoryInMemory();
    commentsRepositoryInMemory = new CommentsRepositoryInMemory();
    listCommentsByNoteUseCase = new ListCommentsByNoteUseCase(
      commentsRepositoryInMemory,
      notesRepositoryInMemory
    );
  });
  
});
