import Button from './Button';
import s from './CourseAndTeacher.module.css';

const Teacher = ({ firstName, lastName, mobile, email, personalIDnumber }) => {
  return (
    <section className={s.section}>
      <h3 className={s.subHeading}>{firstName} {lastName}</h3>
      <p>Personal Identification Number: {personalIDnumber}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
      <Button text='Read more'/>
    </section>
  )
}

export default Teacher;