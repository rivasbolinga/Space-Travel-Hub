import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRockets, selectAllRockets, bookRockets,
} from '../../redux/Rockets/rocketSlice';
import './rocket.css';

export default function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector(selectAllRockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const handleReservation = (rocketId) => {
    dispatch(bookRockets(rocketId));
  };

  return (
    <div className="rockets-container">
      <ul>
        {rockets.map((rocket) => (
          <li className="lele" key={rocket.id}>
            {rocket.image && (
              <img className="raketineslike" src={rocket.image} alt={`Rocket ${rocket.id}`} />
            )}
            <div className="nasloviopis">
              <h3>{rocket.name}</h3>
              <p>
                {rocket.isReserved && <span className="reserved-badge">Reserved</span>}
                {rocket.description}
              </p>

              {rocket.isReserved ? (
                <div>
                  <button className="cancel" type="button" onClick={() => handleReservation(rocket.id, true)}>Cancel reservation</button>
                </div>
              ) : (
                <button className="reserv" type="button" onClick={() => handleReservation(rocket.id, false)}>Reserve rocket</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
