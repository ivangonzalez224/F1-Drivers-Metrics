import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailsItem from './DetailsItem';
import { getDetails } from '../../redux/details/DetailsSlice';

const DetailsList = () => {
  let { driverId } = useParams();
  const dispatch = useDispatch();
  const { detailItems } = useSelector((store) => store.details);
  useEffect(() => {
    if (detailItems.length === 0) {
      dispatch(getDetails());
    }
  });
  console.log(driverId);
  return (
    <div className="details_lowerContainer">
      <div className="details_topGeneral">
        <img alt="constructor car" src="" />
        <div id="details_sum">
          <span id="details_title">FORMULA 1</span>
          <div>
            <span>50</span>
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
            seasonName={season.season}
            contIds={detailItems.indexOf(season)}
          />
        ))}
      </div>
    </div>
  );
};
export default DetailsList;
