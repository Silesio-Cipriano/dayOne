import { Note } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { ICreateNoteDTO } from '../../dtos/ICreateNoteDTO';
import { INotesRepository } from '../../repositories/INotesRepository';

@injectable()
class CreateNoteUseCase {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesRepository
  ) {}

  async execute({ title, description, userId }: ICreateNoteDTO): Promise<Note> {
    // const userAlreadyExist = this.notesRepository.findById(userId);
    
    const noteAlreadyExist = this.notesRepository.findByTitle(title);

    const image = '';

    const note = await this.notesRepository.create({
      title,
      description,
      userId,
    });

    return note;
  }
}

export { CreateNoteUseCase };
