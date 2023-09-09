import { React, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDrivers } from './redux/drivers/DriversSlice';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Details from './components/pages/Details';

const App = () => {
  const dispatch = useDispatch();
  const myDrivers = useSelector((store) => store.drivers);
  useEffect(() => {
    if (myDrivers.driverItems.length === 0) {
      dispatch(getDrivers());
    }
  }, [dispatch, myDrivers.driverItems.length]);

  return (
    <main>
      <div className="main_container">
        <NavBar />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:driverId" element={<Details />} />
          </Routes>
        </section>
      </div>
    </main>
  );
};

export default App;
