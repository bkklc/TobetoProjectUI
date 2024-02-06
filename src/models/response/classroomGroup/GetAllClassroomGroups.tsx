import GetAllClassroomStudents from "../classroomStudent/GetAllClassroomStudents";


export default interface GetAllClassroomGroups {
    Id: number,
    ClassroomName: string,
    GroupName: string,
    Students?: GetAllClassroomStudents[]
}

