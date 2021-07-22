import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        placeholder="Type to filter contacts"
        value={value}
        onChange={onChangeFilter}
      />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
