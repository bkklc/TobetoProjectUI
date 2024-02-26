export default interface UpdateRequestAddress{
    id:number,
    userId:number,
    townId:number,
    cityId:number,
    countryId:number,
    description:string,
}


export const defaultUpdateRequestAddress: UpdateRequestAddress = {
    id:0,
    userId:0,
    townId:0,
    cityId:0,
    countryId:0,
    description:"string",
  };