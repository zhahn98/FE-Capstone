import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSinglePark } from '../../../api/parkData';
import ParkForm from '../../../components/forms/ParkForm';

export default function EditPark() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSinglePark(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<ParkForm obj={editItem} />);
}
