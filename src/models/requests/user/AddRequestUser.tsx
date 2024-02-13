export default interface AddRequestUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  passwordSalt: string;
  passwordHash: string;
}
