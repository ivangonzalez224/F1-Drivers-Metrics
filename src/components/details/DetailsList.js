import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DetailsItem from './DetailsItem';
import { getDetails } from '../../redux/details/DetailsSlice';

const DetailsList = () => {
  const dispatch = useDispatch();
  const { detailItems } = useSelector((store) => store.details);
  useEffect(() => {
    if (detailItems.length === 0) {
      dispatch(getDetails());
    }
  });

  return (
    <div className="details_lowerContainer">
      <div className="details_topGeneral">
        <img alt="constructor car" src={f1Logo} />
        <div id="details_sum">
          <span id="details_title">FORMULA 1</span>
          <div>
            <span>{sumTot}</span>
            <span> drivers</span>
          </div>
        </div>
      </div>
      <div id="details_statsContainer">
        <span id="details_stats">SEASONS:  2023 - 2014</span>
      </div>
      <div className="details_listItems">
        {detailItems.map((season) => (
          <DetailsItem
            key={season.id}
            seasonId={season.id}
            constructorName={season.constructor_name}
            numDrivers={season.num_drivers}
            seasonItem={season.season}
          />
        ))}
      </div>
    </div>
  );
};
export default DetailsList;
