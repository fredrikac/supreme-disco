import Button from './Button';
import s from './CourseAndTeacher.module.css'

//denna komponent ska rendera kursnamn, kursnummer, beskrivning, längd på kursen samt startdatum. Kanske ska hela elementet vara klickbart istället för knapp?
//Course och Teacher delar på css-fil. 
//Eventuellt skulle de kunna dela samma komponent. Finns för- och nackdelar med det. Bestäm senare.

const Course = ({ title, courseId, length, startDate }) => {
  return (
    <section className={s.section}>
      <h3 className={s.subHeading}>{title}</h3>
      <p>Course id: #{courseId}</p>
      <p>Duration: {length}</p>
      <p>Start date: {startDate}</p>
      <Button text='More info'/>
    </section>
  )
}

export default Course