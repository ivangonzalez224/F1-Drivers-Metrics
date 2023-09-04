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
    <ul />
  );
};
export default DetailsList;
