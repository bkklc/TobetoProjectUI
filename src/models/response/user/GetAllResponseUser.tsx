import GetAllUserSocialMedia from "../userSocialMedia/GetAllUserSocialMedia";

export default interface GetAllResponseUser {
  id: number;
  nationalIdentity: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  description: string;
  imageId: number;
  birthDate: Date;
  userSocialMedias: [GetAllUserSocialMedia];
  // userLanguages: userLanguages[];
  // certificates: certificates[];
  // userAnnouncements: userAnnouncements[];
  // experiences: experiences[];
  // userSurveys: userSurveys[];
  // addresses: addresses[];
  // educations: educations[];
    
  }
  

