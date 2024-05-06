import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getReviews } from '../../api/reviewData';
import { useAuth } from '../../utils/context/authContext';
import DisplayReviewCard from '../../components/ReviewCard';

function ReviewHome() {
  const [reviews, setReviews] = useState([]);

  const { user } = useAuth();

  const getAllTheReviews = () => {
    getReviews(user.uid).then(setReviews);
  };

  // Makes the api call to get all parks when park page is rendered
  useEffect(() => {
    getAllTheReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.warn('uid:', user.uid);

  return (
    <div className="text-center my-4">
      <Link href="/review/new" passHref>
        <Button variant="success">Add a Review</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {reviews.map((review, park) => (
          <DisplayReviewCard key={review.firebaseKey} parkObj={park} reviewObj={review} onUpdate={getAllTheReviews} />
        ))}
      </div>
    </div>
  );
}

export default ReviewHome;
