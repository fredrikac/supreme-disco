import { Link } from "react-router-dom"
//denna komponent ska rendera kursnamn, kursnummer, beskrivning, längd på kursen samt startdatum. Kanske ska hela elementet vara klickbart istället för knapp?
//Knappen ska länka till en detaljsida om kursen. 

const Course = ({ title, courseId, length, startDate, description}) => {

  return (
    <section className='section'>
      <h3 className='heading3'>{title}</h3>
      <p>Course id: #{courseId}</p>
      <p>Duration: {length}</p>
      <p>Start date: {startDate}</p>
      <Link 
        to={`/course/${courseId}`} 
        key={courseId} 
        state={{title, courseId, length, startDate, description}}
        className='button8'>
        More info
      </Link>
    </section>
  )
}

export default Course