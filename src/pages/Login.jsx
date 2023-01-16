import { useRef, useContext, useState } from 'react';
import AuthContext from '../store/auth_context';

const Login = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const context = useContext(AuthContext);

  const usernameInputHandler = () => {
    const username = usernameInputRef.current.value;

    if(username.length > 0 && passwordInputRef.current.value.length > 0){
      setButtonDisabled(false);
    }else{
      setButtonDisabled(true);
    }
  }

  const passwordInputHandler = () => {
    const password = passwordInputRef.current.value;

    if(password.length > 0 && usernameInputRef.current.value.length > 0){
      setButtonDisabled(false);
    }else {
      setButtonDisabled(true);
    }
  }
 
  const onSave = (e) => {
    e.preventDefault();

    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;

    context.onLogin({
      username, 
      password
    });
  }

  return (
    <div className='wrapper'>
      <h1 className='subHeading'>Login</h1>
      <form onSubmit={onSave}>
        <label htmlFor='username'>Username/Email</label>
        <input 
          id='username'
          placeholder='username'
          onChange={usernameInputHandler}
          ref={usernameInputRef}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <input 
          type='password' 
          id='password' 
          placeholder='password'
          onChange={passwordInputHandler}
          ref={passwordInputRef}
          minLength='8'
        />
        <br />
        <button
          disabled={buttonDisabled}
          className='button8'
          type='Login'>Login</button>
      </form>
    </div>
  )
}

export default Login;