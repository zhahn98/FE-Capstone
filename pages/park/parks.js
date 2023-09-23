import React, { useEffect, useState } from 'react';
import { getParks } from '../../api/parkData';
import { useAuth } from '../../utils/context/authContext';
import DisplayParkCard from '../../components/ParkCard';
import AddParkBtn from '../../components/AddParkBtn';
import SearchBar from '../../components/Search';

function ParkHome() {
  const [parks, setParks] = useState([]);
  const { user } = useAuth();

  const getAllTheParks = () => {
    getParks(user.uid).then(setParks);
  };

  // Makes the api call to get all parks when park page is rendered
  useEffect(() => {
    getAllTheParks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterResult = (query) => {
    if (query === '') {
      getAllTheParks();
    } else {
      const filter = parks.filter((park) => park.park_name.toLowerCase().includes(query) || park.category.toLowerCase().includes(query));
      setParks(filter);
    }
  };
  const renderParkBtn = user.uid === '6o6nen1BBmeTYrxYuRFIf1mChRN2';
  return (
    <div className="text-center my-4">
      {/* Only shows Add Park Button if user has admin permissions */}
      {renderParkBtn && <AddParkBtn />}
      <SearchBar onKeyUp={(query) => filterResult(query)} />
      <div className="d-flex flex-wrap">
        {parks.map((park) => (
          <DisplayParkCard key={park.firebaseKey} parkObj={park} onUpdate={getAllTheParks} />
        ))}
      </div>
    </div>
  );
}

export default ParkHome;
