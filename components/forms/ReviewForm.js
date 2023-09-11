import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createReview, updateReview } from '../../api/reviewData';
import { getParks } from '../../api/parkData';

const initialState = {
  textBody: '',
  rating: '',
};

function ReviewForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [parks, setParks] = useState([]);
  console.warn(parks);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getParks(user.uid).then(setParks);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateReview(formInput).then(() => router.push('/review/reviews'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createReview(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateReview(patchPayload).then(() => {
          router.push('/review/reviews');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Review</h2>

      {/* PARK SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Park">
        <Form.Select
          aria-label="Park"
          name="park_id"
          onChange={handleChange}
          className="mb-3"
          value={obj.park_id}
          required
        >
          <option value="">Select a Park</option>
          {
            parks.map((park) => (
              <option
                key={park.firebaseKey}
                value={park.firebaseKey}
              >
                {park.park_name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      {/* REVIEW TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Review Title:" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter review title:"
          name="title"
          value={formInput.title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* REVIEW TEXT INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Write about your experience here!" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter review:"
          name="textBody"
          value={formInput.textBody}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* RATING INPUT */}
      <FloatingLabel controlId="floatingInput2" label="Rating:" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter park rating here"
          name="rating"
          value={formInput.rating}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMG INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Image URL:" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter img URL"
          name="reviewImg"
          value={formInput.reviewImg}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Review</Button>
    </Form>
  );
}

ReviewForm.propTypes = {
  obj: PropTypes.shape({
    textBody: PropTypes.string,
    rating: PropTypes.number,
    reviewImg: PropTypes.string,
    park_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

ReviewForm.defaultProps = {
  obj: initialState,
};

export default ReviewForm;
