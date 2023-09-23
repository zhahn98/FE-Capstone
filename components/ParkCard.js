/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import { deleteSinglePark, createFavPark } from '../api/parkData';

export default function DisplayParkCard({ parkObj, onUpdate }) {
  const deleteThisPark = () => {
    if (window.confirm(`Delete ${parkObj.park_name}?`)) {
      deleteSinglePark(parkObj.firebaseKey).then(() => onUpdate());
    }
  };
  const addToFavs = () => {
    if (window.confirm(`Add ${parkObj.park_name} to Community Favorites?`)) {
      createFavPark(parkObj.firebaseKey).then(() => onUpdate());
    }
  };
  const { user } = useAuth();
  const renderParkBtns = user.uid === '6o6nen1BBmeTYrxYuRFIf1mChRN2';
  return (
    <Card border="light" style={{ width: '18rem', margin: '10px', color: 'white', backgroundColor: '#4a6630' }}>
      <Card.Img variant="top" src={parkObj.image} alt={parkObj.park_name} style={{ height: '300px' }} />
      <h2>{parkObj.park_name}</h2>
      <h5>Type: {parkObj.category}</h5>
      <h5>{parkObj.park_state}</h5>
      <Link href={`/park/${parkObj.firebaseKey}`} passHref>
        <Button variant="success" className="m-2">Details</Button>
      </Link>
      <Button variant="success" onClick={addToFavs} className="m-2 custom-button">
        &#x1f49a;
      </Button>
      {renderParkBtns && (
      <>
        <Button variant="danger" onClick={deleteThisPark} className="m-2">Delete
        </Button>
        <Link href={`/park/edit/${parkObj.firebaseKey}`} passHref>
          <Button className="m-2">Edit</Button>
        </Link>
      </>
      )}
    </Card>
  );
}

DisplayParkCard.propTypes = {
  parkObj: PropTypes.shape({
    park_name: PropTypes.string,
    park_state: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
