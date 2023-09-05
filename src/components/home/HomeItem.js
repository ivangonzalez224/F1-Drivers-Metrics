import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
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

HomeItem.propTypes = {
  driverId: PropTypes.string.isRequired,
  constructorName: PropTypes.string.isRequired,
  constructorImg: PropTypes.string.isRequired,
  numDrivers: PropTypes.string.isRequired,
};

export default HomeItem;
