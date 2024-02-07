export default interface AddRequestUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  passwordSalt: string;
  passwordHash: string;
}
