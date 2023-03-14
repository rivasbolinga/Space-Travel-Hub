import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, selectRockets } from '../redux/Rockets/rocketSlice';

export default function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector(selectRockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <h2>Rockets</h2>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <h3>{rocket.rocket_name}</h3>
            <p>{rocket.description}</p>
            {rocket.flickr_images.map((image) => (
              <img key={image} src={image} alt={`Rocket ${rocket.id}`} />
            ))}

          </li>
        ))}
      </ul>
    </div>
  );
}
