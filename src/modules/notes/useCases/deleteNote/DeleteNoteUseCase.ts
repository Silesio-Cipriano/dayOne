import { inject, injectable } from 'tsyringe';
import { INotesRepository } from '../../repositories/INotesRepository';

@injectable()
export class DeleteNoteUseCase {
  constructor(
    @inject('NotesRepository')
    private repository: INotesRepository
  ) {}
  async execute(id: string) {
    await this.repository.delete(id);
  }
}
