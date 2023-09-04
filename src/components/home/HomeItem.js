import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { checkDriver } from '../../redux/drivers/DriversSlice';

const HomeItem = (
  {
    driverId, seasonName,
  },
) => {
  const dispatch = useDispatch();

  return (
    <li />
  );
};

HomeItem.propTypes = {
  driverId: PropTypes.string.isRequired,
  seasonName: PropTypes.string.isRequired,
};

export default HomeItem;
