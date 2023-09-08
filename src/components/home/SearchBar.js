import { useDispatch } from 'react-redux';
import { setFilteredArr } from '../../redux/drivers/DriversSlice';
import '../../assets/styles/home.css';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setFilteredArr(e.target.value));
  };

  return (
    <div className="main_search">
      <input
        type="search"
        onChange={(e) => { handleInput(e); }}
        placeholder="Search by constructor name"
      />
    </div>
  );
};

export default SearchBar;
