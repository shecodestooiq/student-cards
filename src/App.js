import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import SingleStudent from './pages/SingleStudent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/student/:id' element={<SingleStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
