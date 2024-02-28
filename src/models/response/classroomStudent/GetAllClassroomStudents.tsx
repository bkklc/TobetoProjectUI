import { GetAllStudent } from "../student/getAllStudent";

export default interface GetAllClassroomStudents {
    id: number,
    classroomGroupId: number,
    studentId: number,
    classroomGroupName: string,
    student:GetAllStudent
}