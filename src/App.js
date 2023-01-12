import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './components/auth_context';
import Header from './components/Header';
import Start from './pages/Start';
import Login from './pages/Login';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <AuthContextProvider>
      <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Start />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </main>
        </AuthContextProvider>
    </Router>
  );
}

export default App;
