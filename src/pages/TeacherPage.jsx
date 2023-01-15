import { useLocation } from "react-router-dom";
import image from "../assets/profile-placeholder.jpg";

const TeacherPage = () => {
  const location = useLocation();
  const {firstName, lastName, mobile, email, personalIDnumber, competencies, id } = location.state;
  return (
    <section className='wrapper'>
    <h1 className='subHeading'>{firstName} {lastName}</h1>
    <div className='contentWrapper'>
      <div className='teacherInfo'>
        <img src={image} alt="profile" />
          <div className='infoDiv'>
            <ul className='teacherDetails'>
              <li>Teacher ID: {id}</li>
              <li>Email: {email}</li>
              <li>Mobile: {mobile}</li>
              <li>PIN: {personalIDnumber}</li>
            </ul>
          </div>
      </div>
    <h2 className='heading3'>Skills</h2>
      <ul>
        {competencies.map((skill, i) => {
          return(
            <li key={i}>{skill}</li>
          )
        })}
      </ul>
    </div>
  </section>
  )
}

export default TeacherPage;