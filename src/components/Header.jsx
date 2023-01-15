import { useContext } from 'react';
//import { Link } from 'react-router-dom';
import AuthContext from './auth_context';
import s from './Header.module.css';

//se över elementen, ska det vara a eller link? 

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

export default Header