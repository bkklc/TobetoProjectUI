import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import GetStudentCourse from "../../../hooks/getStudentCourse";
import GetAllClassroomGroupCourses, { defaultGetAllClassroomGroupCourses } from "../../../models/response/classroomGroupCourse/GetAllClassroomGroupCourses";
import Paginate from "../../../models/paginate";



const EducationComponent = () => {
  const [course, setCourse] = useState<Paginate<GetAllClassroomGroupCourses>>({
    items: [defaultGetAllClassroomGroupCourses]
  });

  useEffect(() => {
    GetStudentCourse(setCourse);
  }, [])
  return (

    <Row>
      {course.items.map((education: any) => (
        <div key={education.id} className="col-md-3 mb-4">
          <div className="corp-edu-card">
            <div
              className="card-img"
              style={{
                backgroundImage:
                  'url("'+education.imagePath+'")',
              }}
            />
            <div className="card-content">
              <div className="d-flex flex-column">
                <span>{education.courseName}</span>
                <span className="platform-course-date">21 Eylül 2023 15:20</span>
              </div>
              <a className="apply-btn">Eğitime Git</a>
            </div>
          </div>
        </div>
      ))}
    </Row>
  );
};

export default EducationComponent;
