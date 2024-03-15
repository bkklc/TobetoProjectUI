import classroomGroupCourseService from '../services/classroomGroupCourseService';
import classroomStudent from '../services/classroomStudent';
import studentService from '../services/studentService';
import tokenDecode from './tokenDecode';


    const GetStudentCourse = async (state:any, pageSize:any) => {
      try {
        await studentService.getByUserId(tokenDecode().ID)
        .then((res) => {
            classroomStudent.GetListByStudentId(res.data.id)
            .then((resCS) => {               
                classroomGroupCourseService.GetListByClassroomGroupId(resCS.data.items[0].classroomGroupId , pageSize)
                .then((resCGC)=> {
                    state(resCGC.data)
                })
            })
        });
       
      } catch (error) {
        console.error("Veri çekme sırasında bir hata oluştu:", error);
      }
    };

    export default GetStudentCourse;