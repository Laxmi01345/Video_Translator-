import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Translate from './components/Translate';
import Landing from './components/Landing';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/translate" element={<Translate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
