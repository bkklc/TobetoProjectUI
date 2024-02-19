import tokenDecode from "../../../hooks/tokenDecode";

export default interface UpdateRequestUser {
    Id: number,
    NationalIdentity: string,
    FirstName: string,
    LastName: string,
    PhoneNumber: string,
    Email: string,
    Description: string;
    ImageId: number,
    BirthDate: string
}

export const defaultUpdateRequestUser: UpdateRequestUser = {
    Id: Number(tokenDecode().ID),
    NationalIdentity: "",
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Email: "",
    Description: "",
    ImageId: 0,
    BirthDate: ""
  };