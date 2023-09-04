import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Details from './components/pages/Details';

const App = () => (
  <div className="main_container">
    <NavBar />
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </section>
  </div>
);

export default App;
