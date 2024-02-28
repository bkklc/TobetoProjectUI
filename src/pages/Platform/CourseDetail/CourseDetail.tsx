import  { useEffect } from 'react'
import CourseInfo from '../../../components/Platform/CourseDetail/CourseInfo'



const CourseDetail = () => {

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://lms.tobeto.com/tobeto/eep/Styles/assets/css/main_lep.css?v=8.0.11.45';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Component will unmount lifecycle
    return () => {
      document.head.removeChild(link);
    };
  }, []); 


  return (
    <>
    
      
      {/* <CourseBar/> */}
    <CourseInfo/>    
    
      
      
    </>
  )
}

export default CourseDetail