import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllRockets } from '../redux/Rockets/rocketSlice';

function Profile() {
  const reservedRockets = useSelector(selectAllRockets).filter((rocket) => rocket.isReserved);

  return (
    <>
      <h2>My Rockets:</h2>
      {reservedRockets.map((rocket) => (
        <div key={rocket.id}>
          <h3>{rocket.name}</h3>
        </div>
      ))}
    </>
  );
}

export default Profile;
