import React, { useEffect, useState } from 'react';
import { getFavoriteParks, getParks } from '../../api/parkData';
import { useAuth } from '../../utils/context/authContext';
import DisplayParkCard from '../../components/ParkCard';

export default function FavoriteHome() {
  // sets state for fav parks
  const [favParks, setFavParks] = useState([]);
  const [parks, setParks] = useState([]);

  // get user ID with useAuth hook
  const { user } = useAuth();
  // makes api call on component render
  useEffect(() => {
    if (user && user.uid) {
      getFavoriteParks(user.uid)
        .then((favorites) => {
          setFavParks(favorites);
        })
        .catch((error) => {
          console.error('Error fetching user favorites:', error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    getParks().then((parkData) => {
      setParks(parkData);
    })
      .catch((error) => {
        console.error('Error fetching Parks:', error);
      });
  }, []);

  return (
    <div className="text-center my-4">
      <h2>Community Favorite Parks:</h2>
      <div className="mt-5 d-flex flex-wrap">
        {favParks
          // .filter((favorite) => favorite.uid === user.uid)
          .map((favorite) => {
            const matchingPark = parks.find((park) => park.firebaseKey === favorite.parkFirebaseKey);
            if (matchingPark) {
              return (
                <DisplayParkCard
                  key={matchingPark.firebaseKey}
                  parkObj={matchingPark}
                  favParks={favParks}
                  onUpdate={() => getFavoriteParks(user.uid).then((favorites) => setFavParks(favorites))}
                />
              );
            }
            return null;
          })}
      </div>
    </div>
  );
}
