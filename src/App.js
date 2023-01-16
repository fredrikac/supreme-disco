import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './store/auth_context';
import Header from './components/Header';
import Start from './pages/Start';
import Login from './pages/Login';
import Admin from './pages/Admin';
import CoursePage from './pages/CoursePage';
import TeacherPage from './pages/TeacherPage';
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
            <Route path='/course/:courseId' element={<CoursePage />} />
            <Route path='/teacher/:firstName' element={<TeacherPage />} />
          </Routes>
        </main>
        </AuthContextProvider>
    </Router>
  );
}

export default App;
