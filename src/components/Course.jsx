//denna komponent ska rendera kursnamn, kursnummer, beskrivning, längd på kursen samt startdatum. Kanske ska hela elementet vara klickbart istället för knapp?


const Course = ({ title, courseId, length, startDate }) => {
  return (
    <section className='section'>
      <h3 className='heading3'>{title}</h3>
      <p>Course id: #{courseId}</p>
      <p>Duration: {length}</p>
      <p>Start date: {startDate}</p>
      <button className='button8'>More info</button>
    </section>
  )
}

export default Course