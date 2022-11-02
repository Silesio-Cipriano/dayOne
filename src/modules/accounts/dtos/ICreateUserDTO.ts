interface ICreateUserDTO {
  id?: string;
  username: string;
  name: string;
  password: string;
  email: string;
  image?: string;
  createAt?: string;
}

export { ICreateUserDTO };
