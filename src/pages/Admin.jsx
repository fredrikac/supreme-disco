import { useContext } from "react";
import AuthContext from "../components/auth_context";

//Denna sida ska visa välkommen-text samt två knappar, en för att lägga till kurser och en för att lägga till lärare. 
// en portal ska öppnas när användaren klickar på respektive knapp.

const Admin = () => {
  const context = useContext(AuthContext);

  return (
    <section className='wrapper'>
      {!context.isLoggedIn && (
        <h1 className='heading'>Sorry, you need to be logged in to access this page.</h1>
      )}
      {context.isLoggedIn && (
        <>
          <h2 className='subHeading'>Admin page</h2>
          <button className='button8'>Add course</button>
          <button className='button8'>Add teacher</button>
        </>
      )}
    </section>
  )
}

export default Admin;