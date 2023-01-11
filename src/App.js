import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Start from './pages/Start';
import Add from './pages/Add';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Start />}/>
            <Route path='/add' element={<Add />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;
