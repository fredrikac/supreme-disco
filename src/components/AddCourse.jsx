import { useRef } from 'react';

const AddCourse = (props) => {
 
  const titleRef = useRef();
  const descriptionRef = useRef();
  const idRef = useRef();
  const lengthRef = useRef();
  const startDateRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const course = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      id: idRef.current.value,
      length: lengthRef.current.value,
      startDate: startDateRef.current.value
    }
    props.onSave(course);
  }

  return (
    <div className='modal'>
      <div className='wrapper'>
        <button className='close' onClick={props.onClick} />
        <h2 className='heading4'>Add course</h2>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="title">Title</label>
          <input 
            className='input'
            type="text"
            id='title'
            placeholder='title'
            ref={titleRef}
            required
          />
          <label htmlFor="description">Description</label>
          <textarea
            className='input'
            type="text"
            id='description'
            ref={descriptionRef}
            required
          />
          <label htmlFor="courseId">ID</label>
          <input 
            className='input'
            type="number"
            id='courseId'
            ref={idRef}
            required
          />
          <label htmlFor="length">Length (in weeks)</label>
          <input 
            className='input'
            type="number" 
            id='length'
            minLength='1' 
            maxLength='5'
            ref={lengthRef} 
            required
          />
          <label htmlFor="startdate">Start date</label>
          <input 
            className='input'
            type="date"
            id='startdate'
            ref={startDateRef}
            required
          />
          <button className='button8'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default AddCourse;