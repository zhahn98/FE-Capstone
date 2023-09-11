/* eslint-disable @next/next/no-img-element */
/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import viewParkDetails from '../../api/mergedData';
import { getParkReviews } from '../../api/reviewData';
import DisplayReviewCard from '../../components/ReviewCard';

export default function ViewPark() {
  const [parkDetails, setParkDetails] = useState({});
  const [reviews, setReviews] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getParkReviews(firebaseKey).then(setReviews);
    viewParkDetails(firebaseKey).then(setParkDetails);
  }, [firebaseKey]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        {/* Park Details Card */}
        <Card border="light" style={{ width: '25rem', margin: '10px', padding: '5px', color: 'white', backgroundColor: '#597826' }}>
          <Card.Title>{parkDetails.park_name}</Card.Title>
          <Card.Text>State: {parkDetails.park_state}</Card.Text>
          <Card.Text>Category: {parkDetails.category}</Card.Text>
          <Card.Img variant="bottom" src={parkDetails.image} style={{ height: '400px' }} />
        </Card>
        {/* Review Card */}
        <div className="d-flex flex-wrap">
          {reviews.map((review) => (
            <DisplayReviewCard key={review.firebaseKey} reviewObj={review} onUpdate={getParkReviews} />
          ))}
        </div>
      </div>
      <div>
        <Link href="/review/new" passHref>
          <Button variant="success">Add Review</Button>
        </Link>
      </div>
    </>
  );
}
