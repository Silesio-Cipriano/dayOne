import { UsersRepositoryInMemory } from '../../../accounts/repositories/in-memory/UsersRepositoryInMemory';
import { ICreateCommentDTO } from '../../dtos/ICreateCommentDTO';
import { CommentsRepositoryInMemory } from '../../repositories/in-memory/CommentsRepositoryInMemory';
import { NotesRepositoryInMemory } from '../../repositories/in-memory/NotesRepositoryInMemory';
import { CreateCommentUseCase } from './CreateCommentUseCase';

let commentsRepository: CommentsRepositoryInMemory;
let notesRepository: NotesRepositoryInMemory;
let usersRepository: UsersRepositoryInMemory;
let createCommentUseCase: CreateCommentUseCase;

describe('Create Comment', () => {
  beforeEach(() => {
    commentsRepository = new CommentsRepositoryInMemory();
    usersRepository = new UsersRepositoryInMemory();
    notesRepository = new NotesRepositoryInMemory();
    createCommentUseCase = new CreateCommentUseCase(
      commentsRepository,
      notesRepository,
      usersRepository
    );
  });

  it('should able to create a new comment', async () => {
    const comment: ICreateCommentDTO = {
      description: 'Bom ponto',
      noteId: 'test1',
      userId: '1',
    };

    const newComment = await createCommentUseCase.execute(comment);

    console.log(newComment);

    expect(newComment).not.toBeNull();
  });
});
