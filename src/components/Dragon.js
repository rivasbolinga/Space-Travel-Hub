import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchDragons, selectAllDragons, bookDragons,
} from '../redux/Dragons/dragonSlice';
import './dragon.css';

function Dragon() {
  const dispatch = useDispatch();
  const dragons = useSelector(selectAllDragons);
  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const handleReservation = (dragonId) => {
    dispatch(bookDragons(dragonId));
  };

  // return (
  //   <div>
  //     <ul>
  //       {dragons.map((dragon) => (
  //         <div key={dragon.id} className="my-list">
  //           <div>
  //             {dragon.image && (
  //             <img id="img" src={dragon.image} alt={`Dragon ${dragon.id}`} />
  //             )}
  //           </div>
  //           <div>
  //             <h3>{dragon.name}</h3>
  //             <h4>{dragon.type}</h4>
  //             <p>
  //               {dragon.isReserved && <span className="reserved-badge">Reserved</span>}
  //               {dragon.description}
  //             </p>\
  return (
    <div className="rockets-container">
      <ul>
        {dragons.map((dragon) => (
          <li className="lele" key={dragon.id}>
            {dragon.image && (
              <img className="raketineslike" src={dragon.image} alt={`Rocket ${dragon.id}`} />
            )}
            <div className="nasloviopis">
              <h3>{dragon.name}</h3>
              <h4>{dragon.type}</h4>
              <p>
                {dragon.isReserved && <span className="reserved">Reserved</span>}
                {dragon.description}
              </p>
              {dragon.isReserved ? (
                <div>
                  <button className="cancel-btn" type="button" onClick={() => handleReservation(dragon.id, true)}>Cancel reservation</button>
                </div>
              ) : (
                <button className="btn" type="button" onClick={() => handleReservation(dragon.id, false)}>Reserve rocket</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dragon;
