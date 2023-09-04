import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { checkDriver } from '../../redux/drivers/DriversSlice';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const HomeItem = ({ driverId, constructorName, constructorImg, numDrivers }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ backgroundImage: {constructorImg} }}>
        <FaRegArrowAltCircleRight style={{ color: '#fff' }} />
      </div>
      <div>
        <h4>{constructorName}</h4>
        <span>{numDrivers}</span>       
      </div>
    </div>
  );
};

export default HomeItem;
