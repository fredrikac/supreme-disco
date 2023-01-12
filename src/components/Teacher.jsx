

const Teacher = ({ firstName, lastName, mobile, email, personalIDnumber }) => {
  return (
    <section className='section'>
      <h3 className='heading3'>{firstName} {lastName}</h3>
      <p>Personal Identification Number: {personalIDnumber}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
      <button className='button8'>Read more</button>
    </section>
  )
}

export default Teacher;