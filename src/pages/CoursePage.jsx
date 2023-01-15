import { useLocation } from 'react-router-dom';

const CoursePage = () => {
  const location = useLocation();
  const { title, courseId, length, startDate, description } = location.state;
  
  return (
    <section className='wrapper'>
      <h1 className='subHeading'>{title}</h1>
      <div className='contentWrapper'>
      <p>{description}</p>
      <h2 className='heading3'>Practical information</h2>
      <p>All our courses are remote.</p>
      <ul>
        <li>Course id: {courseId}</li>
        <li>Length: {length}</li>
        <li>Start: {startDate}</li>
      </ul>
      <button className='button8'>Register</button>
      </div>
    </section>
  )
}

export default CoursePage;