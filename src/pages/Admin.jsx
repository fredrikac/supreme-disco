import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthContext from "../store/auth_context";
import Modal from "../components/Modal";

//Denna sida ska visa välkommen-text samt två knappar, en för att lägga till kurser och en för att lägga till lärare. 
//en portal ska öppnas när användaren klickar på respektive knapp.
//ett sätt att ha koll på vilken knapp som trycks, och beroende på det visa olika Modals? 

const Admin = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const onShowModalHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
  }

  const onSaveCourse = async (course) => {
    const result = await fetch('http://localhost:3020/courses/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(course),
    });
    
    console.log(result.status)
    if (result.status === 201) {
      setShowModal(false);
      navigate('/');
    }
  }

  const onSaveTeacher = async (teacher) => {
     const result = await fetch('http://localhost:3020/teachers/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teacher),
    });
    
    console.log(result.status)
    if (result.status === 201) {
      setShowModal(false);
      navigate('/')
    }
  }

  return (
    <section className='wrapper'>
      {showModal && (
        <Modal 
          onSave={onSaveTeacher}
          onClick={() => setShowModal(false)}/>
      )}

      {!context.isLoggedIn && (
        <h1 className='heading subHeading'>Sorry, you need to be logged in to access this page.</h1>
      )}
      {context.isLoggedIn && (
        <>
          <h2 className='subHeading'>Admin page</h2>
          <button className='button8 btn' onClick={onShowModalHandler}>Add course</button>
          <button className='button8 btn' onClick={onShowModalHandler}>Add teacher</button> 
        </>
      )}
    </section>
  )
}

export default Admin;