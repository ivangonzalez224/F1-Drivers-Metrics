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
    <ul />
  );
};
export default HomeList;
