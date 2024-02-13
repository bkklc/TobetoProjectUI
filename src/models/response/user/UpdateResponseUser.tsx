export default interface UpdateResponseUser {
  id: number;
  nationalIdentity: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  description: string;
  imageId: number;
  birthDate: Date;
}
