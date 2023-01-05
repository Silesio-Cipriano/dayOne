import { Note } from '@prisma/client';
import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { emojis } from '../../../../utils/Emoji';
import { INotesRepository } from '../../repositories/INotesRepository';

type Reaction_emoji = {
  id: string;
  url: string;
};

type NoteAndReaction = {
  note: Note;
  reaction_Emoji: Reaction_emoji;
};
@injectable()
export class FindNoteUseCase {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesRepository
  ) {}
  async execute(id: string): Promise<NoteAndReaction> {
    const note = await this.notesRepository.findById(id);
    
    let emoji: Reaction_emoji = emojis[Number(note?.reaction_EmojiId)];

    if (!note) throw new AppError("Note don't exist");

    let noteWithReaction: NoteAndReaction = {
      note: note,
      reaction_Emoji: emoji,
    };

    console.log(note);
    return noteWithReaction;
  }
}
