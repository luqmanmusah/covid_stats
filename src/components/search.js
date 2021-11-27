import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const { handleSearch } = props;

  const BarStyling = {
    width: '20rem', background: '#F2F1F9', border: 'none', padding: '0.5rem',
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      placeholder="search country"
      onChange={handleSearch}
    />
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
