import s from './Button.module.css';

const Button = (props) => {
  return (
    <button className={s.button8}>{props.text}</button>
  )
}

export default Button