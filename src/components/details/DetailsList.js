import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailsItem from './DetailsItem';
import { getDetails } from '../../redux/details/DetailsSlice';

const DetailsList = () => {
  const { driverId } = useParams();
  const dispatch = useDispatch();
  const { detailItems } = useSelector((store) => store.details);
  const { driverItems } = useSelector((store) => store.drivers);
  useEffect(() => {
    if (detailItems.length === 0) {
      dispatch(getDetails());
    }
  });
  if (driverItems.length === 0) {
    return (<p className="loading_content">The page could not be loaded. Please click on the top left the button ᐸ to come back to the home page</p>);
  }
  const newDrivers = driverItems.filter((item) => item.constructor_name === driverId);
  const newDetails = detailItems.filter((item) => item.constructor_name === driverId);

  return (
    <div className="details_lowerContainer">
      <div className="details_topGeneral">
        <img alt="constructor car" src={newDrivers[0].constructor_img} />
        <div id="details_sum">
          <span id="details_title">{newDrivers[0].constructor_name.replace('_', ' ')}</span>
          <div>
            <span>{newDrivers[0].num_drivers}</span>
            <span> drivers</span>
          </div>
        </div>
      </div>
      <div id="details_statsContainer">
        <span id="details_stats">SEASONS:  2023 - 2014</span>
      </div>
      <div className="details_listItems">
        {newDetails.map((season) => (
          <DetailsItem
            key={season.id}
            constructorName={season.constructor_name}
            numDrivers={season.num_drivers}
            seasonName={season.season}
            contIds={detailItems.indexOf(season)}
          />
        ))}
      </div>
    </div>
  );
};
export default DetailsList;
