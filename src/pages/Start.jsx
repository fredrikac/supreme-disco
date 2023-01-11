import { useState, useEffect } from 'react';
import Course from '../components/Course';
import Teacher from '../components/Teacher';
import s from './Start.module.css';

//Denna komponent ska rendera komponenten Course och Teacher
//Den ska också hämta data. Begränsa så att den bara hämtar 1 gång.

const Start = () => {
  const [ courses, setCourses ] = useState([]);
  const [ teachers, setTeachers ] = useState([]);

  const getCourses = () => {
    fetch('http://localhost:3010/courses')
    .then((response) => response.json())
    .then((data) => setCourses(data))
  }

  const getTeachers = () => {
    fetch('http://localhost:3010/teachers')
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
    <div className={s.wrapper}>
      <h1 className={s.heading}>Welcome to Westcoast Education!</h1>
      <h2 className={s.subHeading}>Courses</h2>
      <div className={s.sectionWrapper}>
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
      <h2 className={s.subHeading}>Our teachers</h2>
      <div className={s.sectionWrapper}>
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