import { useLocation } from 'react-router-dom';

const CoursePage = () => {
  const location = useLocation();
  const { title, id, length, startDate, description } = location.state;
  
  return (
    <section className='wrapper'>
      <h1 className='subHeading'>{title}</h1>
        <div className='contentWrapper'>
          <p>{description}</p>
          <h2 className='heading4'>Practical information</h2>
          <p>All our courses are remote.</p>
          <ul>
            <li>Course id: {id}</li>
            <li>Length: {length}</li>
            <li>Start: {startDate}</li>
          </ul>
          <button className='button8' disabled>Register</button>
        </div>
    </section>
  )
}

export default CoursePage;