import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export default function SearchBar({ onKeyUp }) {
  const handleChange = (e) => {
    onKeyUp(e.target.value.toLowerCase());
  };

  return (
    <>
      <Form className="search">
        <div className="search-box">
          <input
            className="form-control"
            id="search"
            name="search"
            placeholder="Search parks:"
            onChange={handleChange}
            type="text"
          />
        </div>
      </Form>
      <br />
    </>
  );
}

SearchBar.propTypes = {
  onKeyUp: PropTypes.func.isRequired,
};
