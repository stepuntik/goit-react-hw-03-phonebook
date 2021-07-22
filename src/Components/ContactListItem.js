import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <li>
        {name}: {number}
        <button type="button" onClick={onDeleteContact}>
          Delete
        </button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
