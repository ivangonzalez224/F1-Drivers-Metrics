import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeDetail } from '../../redux/details/DetailsSlice';

const DetailsItem = (
  {
    seasonId,
  },
) => {
  const dispatch = useDispatch();

  return (
    <li />
  );
};

DetailsItem.propTypes = {
  seasonId: PropTypes.string.isRequired,
  seasonName: PropTypes.string.isRequired,
};

export default DetailsItem;
