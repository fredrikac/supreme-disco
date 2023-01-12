import { useState, useEffect } from 'react';
import Course from '../components/Course';
import Teacher from '../components/Teacher';

//Denna komponent ska rendera komponenten Course och Teacher
//Den ska också hämta data. Begränsa så att den bara hämtar 1 gång.

const Start = () => {
  const [ courses, setCourses ] = useState([]);
  const [ teachers, setTeachers ] = useState([]);

  const getCourses = () => {
    fetch('http://localhost:3020/courses')
    .then((response) => response.json())
    .then((data) => setCourses(data))
  }

  const getTeachers = () => {
    fetch('http://localhost:3020/teachers')
    .then((response) => response.json())
    .then((data) => setTeachers(data))
  }

  useEffect(() => {
    getCourses();
  },[]);

  useEffect(() => {
    getTeachers();
  }, []);

  console.log(courses)
  return (
    <div className='wrapper'>
      <h1 className='heading'>Welcome to Westcoast Education!</h1>
      <h2 className='subHeading'>Courses</h2>
      <div className='sectionWrapper'>
      {courses.map((course, i) => {
        return(
        <Course 
        key={i}
        title={course.title}
        courseId={course.courseId}
        length={course.length}
        startDate={course.startDate}
        description={course.description}
        />
        )
      })}
      </div>
      <h2 className='subHeading'>Our teachers</h2>
      <div className='sectionWrapper'>
      {teachers.map((teacher, i) => {
        return(
          <Teacher 
          key={i} 
          firstName={teacher.firstName}
          lastName={teacher.lastName}
          email={teacher.email}
          personalIDnumber={teacher.personalIDnumber}
          mobile={teacher.mobile}
          /> 
        )
      })}
      </div>
    </div>
  )
}

export default Start;