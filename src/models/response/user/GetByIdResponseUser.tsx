import GetAllAddress from "../address/GetAllAddress";
import GetAllCertificate from "../certificate/GetAllCertificate";
import GetAllEducation from "../education/GetAllEducation";
import GetAllExperience from "../experience/GetAllExperience";
import GetAllResponseSurvey from "../surveys/GetAllResponseSurvey";
import GetAllResponseUserAnnouncement from "../userAnnouncement/GetAllResponseUserAnnouncement";
import GetAllResponseUserLanguage from "../userLanguage/GetAllResponseUserLanguage";
import GetAllUserSocialMedia from "../userSocialMedia/GetAllUserSocialMedia";

export default interface GetByIdResponseUser {
    nationalIdentity: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    description: string;
    imageId: number,
    imagePath:string,
    birthDate: string
    userSocialMedias: GetAllUserSocialMedia[];
    userLanguages: GetAllResponseUserLanguage[]
    certificates: GetAllCertificate[]
    userAnnouncements: GetAllResponseUserAnnouncement[]
    experiences: GetAllExperience[]
    userSurveys: GetAllResponseSurvey[]
    addresses: GetAllAddress[]
    educations: GetAllEducation[]
}