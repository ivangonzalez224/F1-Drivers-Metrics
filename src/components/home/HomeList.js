import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeItem from './HomeItem';
import SearchBar from './SearchBar';
import f1Logo from '../../assets/images/f1Icon.png';

const HomeList = () => {
  const myDrivers = useSelector((store) => store.drivers);
  const totalSum = myDrivers.counter;
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch, totalSum]);

  return (
    <div className="home_lowerContainer">
      <div className="home_topGeneral">
        <img alt="formula 1 logo" src={f1Logo} />
        <div id="home_sum">
          <span id="home_title">FORMULA 1</span>
          <div>
            <span>{totalSum}</span>
            <span> drivers</span>
          </div>
        </div>
      </div>
      <SearchBar />
      <div id="home_statsContainer">
        <span id="home_stats">STATS BY CONSTRUCTOR</span>
      </div>
      <div className="home_listItems">
        {myDrivers.newList.map((driver) => (
          <HomeItem
            key={driver.id}
            driverId={driver.id}
            constructorImg={driver.constructor_img}
            constructorName={driver.constructor_name.replace('_', ' ')}
            numDrivers={driver.num_drivers}
            contIds={myDrivers.newList.indexOf(driver) + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeList;
