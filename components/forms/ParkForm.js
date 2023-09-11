import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createPark, updatePark, getParks } from '../../api/parkData';

const initialState = {
  park_name: '',
  park_state: '',
};

function ParkForm({ obj }) {
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
      updatePark(formInput).then(() => router.push('/park/parks'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createPark(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updatePark(patchPayload).then(() => {
          router.push('/park/parks');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Park</h2>

      {/* PARK NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Park Name:" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter park name"
          name="park_name"
          value={formInput.park_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* STATE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="State:" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter state"
          name="park_state"
          value={formInput.park_state}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT
      <Form.Group controlId="floatingInput3" className="mb-3">
        <Form.Control type="file" name="image" placeholder="Choose Image" />
      </Form.Group> */}

      {/* IMG INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Image URL:" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter img URL"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* CATEGORY SELECT */}
      <FloatingLabel controlId="floatingInput2" label="Category:" className="mb-3">
        <Form.Select
          aria-label="Category"
          name="category"
          onChange={handleChange}
          className="mb-3"
          value={obj.category}
          required
        >
          <option>Mountain</option>
          <option>Forest</option>
          <option>Waterfall</option>
          <option>Desert</option>
          <option>Lake</option>
          <option>Other</option>
        </Form.Select>
      </FloatingLabel>

      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="favorite"
        name="favorite"
        label="Favorite?"
        checked={formInput.favorite}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            favorite: e.target.checked,
          }));
        }}
      />

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Park</Button>
    </Form>
  );
}

ParkForm.propTypes = {
  obj: PropTypes.shape({
    park_name: PropTypes.string,
    park_state: PropTypes.string,
    parkId: PropTypes.string,
    favorite: PropTypes.bool,
    image: PropTypes.string,
    category: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

ParkForm.defaultProps = {
  obj: initialState,
};

export default ParkForm;
