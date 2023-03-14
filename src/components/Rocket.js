import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, selectRockets } from '../redux/Rockets/rocketSlice';

export default function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector(selectRockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const handleReservation = (rocketId) => {
    // Ovdje dodajte kôd za rezervaciju rakete s ID-om rocketId
    console.log(`Raketa ${rocketId} rezervirana`);
  };

  return (
    <div className="rockets-container">
      <ul>
        {rockets.map((rocket) => (
          <li className="lele" key={rocket.id}>
            {rocket.flickr_images.length > 0 && (
              <img className="raketineslike" src={rocket.flickr_images[0]} alt={`Rocket ${rocket.id}`} />
            )}
            <div className="nasloviopis">
              <h3>{rocket.name}</h3>
              <p>{rocket.description}</p>
              <button type="button" onClick={() => handleReservation(rocket.id)}>Reservation</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
