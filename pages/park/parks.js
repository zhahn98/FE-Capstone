import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
import { getParks } from '../../api/parkData';
import getUsers from '../../api/userData';
import { useAuth } from '../../utils/context/authContext';
import DisplayParkCard from '../../components/ParkCard';
import AddParkBtn from '../../components/AddParkBtn';

function ParkHome() {
  const [parks, setParks] = useState([]);
  const [users, setUsers] = useState([]);

  const { user } = useAuth();

  const getAllTheParks = () => {
    getParks(user.uid).then(setParks);
  };

  const getAllTheUsers = () => {
    getUsers().then(setUsers);
  };

  console.warn(user.uid);
  console.warn(users.isAdmin);

  // Makes the api call to get all parks when park page is rendered
  useEffect(() => {
    getAllTheParks();
    getAllTheUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center my-4">
      {/* Only shows Add Park Button if user has admin permissions */}
      {users.isAdmin && <AddParkBtn />}
      <div className="d-flex flex-wrap">
        {parks.map((park) => (
          <DisplayParkCard key={park.firebaseKey} parkObj={park} onUpdate={getAllTheParks} />
        ))}
      </div>
    </div>
  );
}

export default ParkHome;
