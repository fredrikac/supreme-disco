import { Link } from "react-router-dom";

const Teacher = ({ firstName, lastName, mobile, email, personalIDnumber, competencies, id }) => {
  return (
    <section className='section'>
      <Link 
        to={`/teacher/${firstName}`} 
        key={`${firstName}-${id}`} 
        state={{firstName, lastName, mobile, email, personalIDnumber, competencies, id}}
        className='heading3'>
        {firstName} {lastName}
      </Link>
      <p>Personal Identification Number: {personalIDnumber}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
      <Link 
        to={`/teacher/${firstName}`} 
        key={id} 
        state={{firstName, lastName, mobile, email, personalIDnumber, competencies, id}}
        className='button8'>
        Read more
      </Link>
    </section>
  )
}

export default Teacher;