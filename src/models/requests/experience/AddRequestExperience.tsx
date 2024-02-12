export default interface AddRequestExperience {
    UserId: number,
    CityId: number,
    CompanyName: string,
    Position: string,
    Sector: string,
    Description: string,
    StartDate: Date,
    EndDate: Date | null
}