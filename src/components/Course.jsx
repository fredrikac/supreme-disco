import { Link } from "react-router-dom";

const Course = ({ title, id, length, startDate, description}) => {

  return (
    <section className='section'>
      <Link 
        to={`/course/${id}`} 
        key={`${title}-${id}`} 
        state={{title, id, length, startDate, description}}
        className='heading3'>
        {title}
      </Link>
      <p>Course id: #{id}</p>
      <p>Duration: {length} weeks</p>
      <p>Start date: {startDate}</p>
      <Link 
        to={`/course/${id}`} 
        key={id} 
        state={{title, id, length, startDate, description}}
        className='button8 info-btn'>
        More info
      </Link>
    </section>
  )
}

export default Course;