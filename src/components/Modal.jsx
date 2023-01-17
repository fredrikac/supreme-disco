import ReactDOM from "react-dom";
import AddCourse from "./AddCourse";
import AddTeacher from "./AddTeacher";

const Overlay = () => {
  return <div className='overlay' />
}

const ModalOverlay = (props) => {
  return (
    <>
      {props.type === 'course' ? (
        <AddCourse 
          onSave={props.onSave}
          onClick={props.onClick}
        />
      ) : (
        <AddTeacher 
          onSave={props.onSave}
          onClick={props.onClick}
        />
      )}
    </>
  );
}

const Modal = (props) => {
  
  return (
    <div>
      {ReactDOM.createPortal(
        <Overlay />,
        document.querySelector('#overlay-root'),
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          type={props.type}
          onSave={props.onSave}
          onClick={props.onClick}
          >{props.children}
          </ModalOverlay>,
        document.querySelector('#modal-root'),
      )}
    </div>
  )
}

export default Modal;