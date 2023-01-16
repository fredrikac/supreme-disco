import { Link } from "react-router-dom"
//denna komponent ska rendera kursnamn, kursnummer, beskrivning, längd på kursen samt startdatum. Kanske ska hela elementet vara klickbart istället för knapp?
//Knappen ska länka till en detaljsida om kursen. 

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
      <p>Duration: {length}</p>
      <p>Start date: {startDate}</p>
      <Link 
        to={`/course/${id}`} 
        key={id} 
        state={{title, id, length, startDate, description}}
        className='button8'>
        More info
      </Link>
    </section>
  )
}

export default Course