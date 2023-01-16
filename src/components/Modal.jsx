import ReactDOM from "react-dom";
import AddCourse from "./AddCourse";
import AddTeacher from "./AddTeacher";
import s from './Modal.module.css';

//Hur lösa två olika komponenter i popupsen beroende på vilken knapp som trycks på i admin?

const Overlay = () => {
  return <div className={s.overlay} />
}

const ModalOverlay = (props) => {
  return (
      <AddTeacher 
        onSave={props.onSave}
        onClick={props.onClick}
      />
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