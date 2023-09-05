import PropTypes from 'prop-types';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const DetailsItem = (
  {
    numDrivers, seasonId, seasonName,
  },
) => (
  <div className="details_itemContainer">
    <span className="details_seasonName">{seasonName}</span>
    <div>
      <div className="details_numDrivers">
        <span>{numDrivers}</span>
        <span>drivers</span>
      </div>
      <FaRegArrowAltCircleRight style={{ cursor: 'pointer', color: '#fff' }} />
    </div>
  </div>
);

DetailsItem.propTypes = {
  seasonId: PropTypes.string.isRequired,
  numDrivers: PropTypes.string.isRequired,
  seasonName: PropTypes.string.isRequired,
};

export default DetailsItem;
