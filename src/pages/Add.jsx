import Button from "../components/Button";

//Denna sida ska visa välkommen-text samt två knappar, en för att lägga till kurser och en för att lägga till lärare. 


const Add = () => {
  return (
    <section>
      <h2>Admin page</h2>
      <Button text='Add course'/>
      <Button text='Add teacher'/>
    </section>
  )
}

export default Add;