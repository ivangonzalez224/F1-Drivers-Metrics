import PropTypes from 'prop-types';
import React from 'react';
import '../../assets/styles/home.css';

const SearchBar = ({ handleInput }) => (
  <div className="main_search">
    <input
      type="search"
      onChange={handleInput}
      placeholder="Search by constructor name"
    />
  </div>
);

SearchBar.propTypes = {
  handleInput: PropTypes.func.isRequired,
};

export default SearchBar;
