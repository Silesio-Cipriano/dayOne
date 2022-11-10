interface ICreateNoteDTO {
  id?: string;
  title: string;
  description: string;
  image?: string;
  userId: string;
  categoryId: string;
}

export { ICreateNoteDTO };
