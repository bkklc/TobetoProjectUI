export default interface GetAllAddress{
    id:number,
    userId:number,
    townName:string,
    cityName:string,
    countryName:string,
    description:string,
    townId:number,
    cityId:number,
    countryId:number
}

export const defaultGetAllAddress: GetAllAddress = {

    id:0,
    userId:0,
    townName:"",
    cityName:"",
    countryName:"",
    description:"",
    townId:0,
    cityId:0,
    countryId:0
}