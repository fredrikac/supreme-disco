import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userloggedIn = localStorage.getItem('isLoggedIn');

    if (userloggedIn === '1') {
      setIsLoggedIn(true);
      setUsername(localStorage.getItem('username'));
    }
  }, []);

  const onLogoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  };

  const onLoginHandler = (user) => {
    setIsLoggedIn(true);
    setUsername(user.username)
    localStorage.setItem('isLoggedIn', 1);
    localStorage.setItem('username', user.username);
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        user: username,
        onLogout: onLogoutHandler,
        onLogin: onLoginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
