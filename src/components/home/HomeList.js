import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeItem from './HomeItem';
import SearchBar from './SearchBar';
import { getDrivers } from '../../redux/drivers/DriversSlice';
import f1Logo from '../../assets/images/f1Icon.png';

const HomeList = () => {
  const dispatch = useDispatch();
  let { driverItems } = useSelector((store) => store.drivers);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (driverItems.length === 0) {
      dispatch(getDrivers());
    }
  }, []);

  const sumTot = driverItems[driverItems.length - 1];
  driverItems = driverItems.slice(0, -1);
  let checkDriverItems = 0;
  let updatedList = driverItems;
  console.log(driverItems);
  if (driverItems.length === 6) {
    checkDriverItems += 1;
    console.log(checkDriverItems);
  }
  if (checkDriverItems === 1) {
    setFilteredList(updatedList);
  }
  const handleChange = (event) => {
    const userInput = event.target.value;
    updatedList = driverItems;
    updatedList = updatedList.filter(
      (item) => item.constructor_name.toLowerCase().includes(userInput.toLowerCase()),
    );
    setFilteredList(updatedList);
    console.log(filteredList);
  };

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
      <SearchBar
        handleInput={handleChange}
      />
      <div id="home_statsContainer">
        {/* {driverItems.length === 6 ? setFilteredList(updatedList) : console.log('está en 0')} */}
        <span id="home_stats">STATS BY CONSTRUCTOR</span>
      </div>
      <div className="home_listItems">
        {filteredList.map((driver) => (
          <HomeItem
            key={driver.id}
            driverId={driver.id}
            constructorImg={driver.constructor_img}
            constructorName={driver.constructor_name.replace('_', ' ')}
            numDrivers={driver.num_drivers}
            contIds={driverItems.indexOf(driver) + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeList;
