/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleReview } from '../api/reviewData';
import { useAuth } from '../utils/context/authContext';

export default function DisplayReviewCard({ reviewObj, onUpdate }) {
  const { user } = useAuth();
  const deleteThisReview = () => {
    if (window.confirm('Delete?')) {
      deleteSingleReview(reviewObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card border="light" style={{ width: '18rem', margin: '10px', color: 'white', backgroundColor: '#1e610f' }}>
      <Card.Img variant="top" src={reviewObj.reviewImg} alt={reviewObj.title} style={{ height: '300px' }} />
      <h2>{reviewObj.title}</h2>
      <h5>{reviewObj.textBody}</h5>
      <h5>User Rating: {reviewObj.rating}</h5>
      {/* <h5>Submitted by: {user.displayName}</h5> */}
      {user.uid === reviewObj.uid && (
        <>
          <Button variant="danger" onClick={deleteThisReview} className="m-2">
            Delete
          </Button>
          <Link href={`/review/edit/${reviewObj.firebaseKey}`} passHref>
            <Button className="m-2">Edit</Button>
          </Link>
        </>
      )}
    </Card>
  );
}
DisplayReviewCard.propTypes = {
  // parkObj: PropTypes.shape({
  //   park_name: PropTypes.string,
  // }).isRequired,
  reviewObj: PropTypes.shape({
    title: PropTypes.string,
    park_name: PropTypes.string,
    rating: PropTypes.number,
    textBody: PropTypes.string,
    reviewImg: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
