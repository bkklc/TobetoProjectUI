import GetAllClassroomStudents from "../classroomStudent/GetAllClassroomStudents";


export default interface GetAllClassroomGroups {
    id: number,
    classroomName: string,
    groupName: string,
    students?: GetAllClassroomStudents[]
}

