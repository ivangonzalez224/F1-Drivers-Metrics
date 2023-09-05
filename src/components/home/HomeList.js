import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeItem from './HomeItem';
import { getDrivers } from '../../redux/drivers/DriversSlice';
import f1Logo from '../../assets/images/f1Icon.png';

const HomeList = () => {
  const dispatch = useDispatch();
  let { driverItems } = useSelector((store) => store.drivers);
  useEffect(() => {
    if (driverItems.length === 0) {
      dispatch(getDrivers());
    }
  });

  const sumTot = driverItems[driverItems.length - 1];
  driverItems = driverItems.slice(0, -1);
  return (
    <div className="home_lowerContainer">
      <div className="home_topGeneral">
        <img alt="formula 1 logo" src={f1Logo} />
        <div id="home_sum">
          <span id="home_title">FORMULA 1</span>
          <div>
            <span>{sumTot}</span>
            <span> drivers</span>
          </div>
        </div>
      </div>
      <div id="home_statsContainer">
        <span id="home_stats">STATS BY CONSTRUCTOR</span>
      </div>
      <div className="home_listItems">
        {driverItems.map((driver) => (
          <HomeItem
            key={driver.id}
            driverId={driver.id}
            constructorImg={driver.constructor_img}
            constructorName={driver.constructor_name}
            numDrivers={driver.num_drivers}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeList;
