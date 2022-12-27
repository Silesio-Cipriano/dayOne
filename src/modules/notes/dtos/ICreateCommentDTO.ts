interface ICreateCommentDTO {
  id?: string;
  description: string;
  userId: string;
  noteId: string;
  commentedId?: string;
}

export { ICreateCommentDTO };
