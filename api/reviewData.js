import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// get reviews
const getReviews = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/reviews.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getParkReviews = (selectedParkId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/reviews.json?orderBy="park_id"&equalTo="${selectedParkId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// get own reviews
const getOwnReviews = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/reviews.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// create review
const createReview = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/reviews.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// get a single review
const getSingleReview = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/reviews/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// delete a review
const deleteSingleReview = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/reviews/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// update review
const updateReview = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/reviews/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getReviews,
  getParkReviews,
  getOwnReviews,
  createReview,
  getSingleReview,
  deleteSingleReview,
  updateReview,
};
