export default interface GetAllExperience{
    id:number,
    userId:number,
    cityId:number,
    cityName:string,
    companyName:string,
    position:string,
    sector:string,
    description:string,
    startDate:string,
    endDate:string
}

export const defaultGetAllExperience: GetAllExperience = {
    id:0,
    userId:0,
    cityId:0,
    cityName:"",
    companyName:"",
    position:"",
    sector:"",
    description:"",
    startDate:"",
    endDate:""
}