import { useRef } from 'react';
import s from './AddCourse.module.css';

//Fixa: competencies behöver vara en array. 

const AddTeacher = (props) => {

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const personalIDRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const competenciesRef = useRef();
  const idRef = useRef();

  const onSubmitTeacher = async (e) => {
    e.preventDefault();

    const teacher = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      personalIDnumber: personalIDRef.current.value,
      email: emailRef.current.value,
      mobile: mobileRef.current.value,
      competencies: competenciesRef.current.value,
      id: idRef.current.value
    }
    props.onSave(teacher);
  }


  return (
    <div className={s.modal}>
      <div className='wrapper'>
        <button className='close' onClick={props.onClick} />
        <h2>Add teacher</h2>
        <form onSubmit={onSubmitTeacher}>
          <label htmlFor='firstName'>First name</label>
          <input 
            type="text"
            id='firstName'
            placeholder='first name'
            ref={firstNameRef} 
          />
          <label htmlFor="lastName">Last name</label>
          <input 
            type="text"
            id='lastName'
            placeholder='last name'
            ref={lastNameRef} 
          />
          <label htmlFor="personalID">Personal ID number</label>
          <input 
            id='personalID'
            type="number" 
            placeholder='YYYYMMDD'
            ref={personalIDRef}
          />
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            id='email'
            ref={emailRef} 
          />
          <label htmlFor="mobile">Mobile phone</label>
          <input 
            type="tel"
            id='mobile'
            ref={mobileRef} 
          />
          <label htmlFor="competencies">Skills</label>
          <input 
            type="text"
            id='competencies'
            ref={competenciesRef} 
          />
          <label htmlFor="id">Staff ID</label>
          <input 
            type="number"
            id='id'
            ref={idRef} />
          <button className='button8'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default AddTeacher