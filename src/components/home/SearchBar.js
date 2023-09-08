import '../../assets/styles/home.css';

const SearchBar = ({name, filterName}) => (
  <div className="main_search">
    <input
      type="search"
      value={name}
      onChange={filterName}
      placeholder="Search by constructor name" 
    />
  </div>
);

export default SearchBar;
