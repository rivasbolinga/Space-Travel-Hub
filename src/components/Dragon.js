import React from 'react';
import { useSelector } from 'react-redux';
import { selectDragons } from '../redux/Dragons/dragonSlice';
import './dragon.css';

function Dragon() {
  const dragons = useSelector(selectDragons);
  return (
    <div>
      <ul>
        {dragons.map((dragon) => (
          <div key={dragon.id} className="my-list">
            <div>
              {dragon.flickr_images.length > 0 && (
                <img id="img" src={dragon.flickr_images[0]} alt={`Dragon ${dragon.id}`} />
              )}
            </div>
            <div>
              <h3>{dragon.name}</h3>
              <h4>{dragon.type}</h4>
              <p>{dragon.description}</p>
              <button type="button" id="btn">Reservation</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Dragon;
