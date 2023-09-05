import PropTypes from 'prop-types';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const HomeItem = (
  {
    constructorName, constructorImg, numDrivers,
  },
) => (
  <div
    className="home_itemContainer"
    style={
      {
        background: `url(${constructorImg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
      }
    }
  >
    <div>
      <FaRegArrowAltCircleRight style={{ cursor: 'pointer', color: '#fff' }} />
    </div>
    <div className="home_dataItem">
      <span className="home_construcName">{constructorName}</span>
      <span>{numDrivers}</span>
    </div>
  </div>
);

HomeItem.propTypes = {
  constructorName: PropTypes.string.isRequired,
  constructorImg: PropTypes.string.isRequired,
  numDrivers: PropTypes.string.isRequired,
};

export default HomeItem;
