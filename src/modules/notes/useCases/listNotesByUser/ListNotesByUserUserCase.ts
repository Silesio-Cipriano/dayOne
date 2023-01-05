import { Note, Reaction_Emoji } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
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
export class ListNotesByUserUserCase {
  constructor(
    @inject('NotesRepository')
    private repository: INotesRepository
  ) {}

  async execute(userId: string): Promise<NoteAndReaction[]> {
    const notes = await this.repository.findAllByUser(userId);
    let notesWithReactions: NoteAndReaction[] = [];

    if (notes) {
      notes.map((note) => {
        let emoji: Reaction_emoji = emojis[Number(note.reaction_EmojiId)];
        notesWithReactions.push({ note: note, reaction_Emoji: emoji });
      });
    }

    notesWithReactions.reverse();
    return notesWithReactions;
  }
}
