import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// get parks
const getParks = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/parks.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// create park
const createPark = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/parks.json`, {
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

// get a single park
const getSinglePark = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/parks/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// delete a park
const deleteSinglePark = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/parks/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// update park
const updatePark = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/parks/${payload.firebaseKey}.json`, {
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
  getParks,
  createPark,
  getSinglePark,
  deleteSinglePark,
  updatePark,
};
