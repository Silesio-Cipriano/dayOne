interface ICreateNoteDTO {
  id?: string;
  title: string;
  description: string;
  image?: string;
  userId: string;
}

export { ICreateNoteDTO };
