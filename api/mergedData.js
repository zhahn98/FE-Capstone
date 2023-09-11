import { getSinglePark } from './parkData';
import { getSingleReview } from './reviewData';

const viewParkDetails = (parkFirebaseKey) => new Promise((resolve, reject) => {
  getSinglePark(parkFirebaseKey)
    .then((parkObject) => {
      getSingleReview(parkObject.review_id)
        .then((reviewObject) => {
          resolve({ reviewObject, ...parkObject });
        });
    }).catch((error) => reject(error));
});

export default viewParkDetails;
