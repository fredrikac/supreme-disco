import { useContext } from 'react';
import AuthContext from '../store/auth_context';
import s from './Header.module.css';

const Header = () => {
  const context = useContext(AuthContext);

  return (
    <header className={s.header}>
      <a href='/' className={s.heading}>Westcoast Education</a>
      <nav className={s.navbar}>
        {!context.isLoggedIn && (
          <a className='button8' href='/login'>Login</a>
        )}
        {context.isLoggedIn && (
          <>
          <a className={s.adminLink} href='/admin'>Admin</a>
          <button className='button8' onClick={context.onLogout}>Log out</button>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header;