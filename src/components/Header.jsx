//import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.heading}>Westcoast Education</h1>
      <nav className={s.navbar}>
        <a href='/'>Home</a>
        <a href='/add'>Add</a>
      </nav>
    </header>
  )
}

export default Header