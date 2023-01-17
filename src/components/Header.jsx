import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../store/auth_context';
import s from './Header.module.css';

const Header = () => {
  const context = useContext(AuthContext);

  return (
    <header className={s.header}>
      <Link to='/' className={s.heading}>Westcoast Education</Link>
      <nav className={s.navbar}>
        {!context.isLoggedIn && (
          <Link className='button8' to='/login'>Login</Link>
        )}
        {context.isLoggedIn && (
          <>
          <Link className={s.adminLink} to='/admin'>Admin</Link>
          <button className='button8' onClick={context.onLogout}>Log out</button>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header