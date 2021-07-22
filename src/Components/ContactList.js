import React from 'react';
import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';

const ContactList = ({ updatedList, onDeleteContact }) => {
  return (
    <>
      <ul>
        {updatedList.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  updatedList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
