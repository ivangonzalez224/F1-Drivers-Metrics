import PropTypes from 'prop-types';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const DetailsItem = (
  {
    numDrivers, seasonName, contIds,
  },
) => (
  <div className={contIds % 2 === 0 ? 'details_itemContainer light' : 'details_itemContainer dark'}>
    <span className="details_seasonName">{seasonName}</span>
    <div className="details_itemRight">
      <div className="details_numContainer">
        <span className="details_numDrivers">{numDrivers}</span>
        <span> drivers</span>
      </div>
      <FaRegArrowAltCircleRight style={{ cursor: 'pointer', color: '#fff' }} />
    </div>
  </div>
);

DetailsItem.propTypes = {
  numDrivers: PropTypes.number.isRequired,
  seasonName: PropTypes.number.isRequired,
  contIds: PropTypes.number.isRequired,
};

export default DetailsItem;
