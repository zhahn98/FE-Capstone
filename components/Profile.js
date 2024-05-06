import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../utils/context/authContext';

export default function UserProfileCard() {
  const { user } = useAuth();

  // function handleChange() {

  // }

  return (
    // eslint-disable-next-line
    <Card border="light" style={{ width: '18rem', margin: '10px', color: 'white', backgroundColor: '#4a6630' }}>
      <Card.Header>
        <h2>{user.displayName}</h2>
      </Card.Header>
      {/* <Card.Body>
        <p>X Reviews</p>
      </Card.Body>
      <input type="file" onChange={handleChange} /> */}
    </Card>
  );
}

UserProfileCard.propTypes = {
  userObj: PropTypes.shape({
    uid: PropTypes.string,
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
  }).isRequired,
};
