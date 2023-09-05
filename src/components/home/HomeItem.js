import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const HomeItem = (
  {
    constructorName, constructorImg, numDrivers,
  },
) => (
  <NavLink
    to="/details"
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
  </NavLink>
);

HomeItem.propTypes = {
  constructorName: PropTypes.string.isRequired,
  constructorImg: PropTypes.string.isRequired,
  numDrivers: PropTypes.string.isRequired,
};

export default HomeItem;
