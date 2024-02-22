export default interface GetAllCertificate{
    Id:number,
    UserId:number,
    Path:string,
    Filename:string,
}

export const defaultGetAllCertificate: GetAllCertificate = {

    Id:0,
    UserId:0,
    Path:"string",
    Filename:"string",
}