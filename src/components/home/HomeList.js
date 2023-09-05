import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeItem from './HomeItem';
import { getDrivers } from '../../redux/drivers/DriversSlice';

const HomeList = () => {
  const dispatch = useDispatch();
  const { driverItems } = useSelector((store) => store.drivers);
  useEffect(() => {
    if (driverItems.length === 0) {
      dispatch(getDrivers());
    }
  });

  return (
    <div>
      <div className='home_topGeneral'>
        <img></img>
        <div>
          <h3>Formula 1</h3>
          <div>
            <span></span>
            <span>drivers</span>
          </div>
        </div>
      </div>
      <span>STATS BY CONSTRUCTOR</span>
      <div className='home_listItems'>
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
