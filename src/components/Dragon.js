import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons, selectDragons } from '../redux/Dragons/dragonSlice';

function Dragon() {
  const dispatch = useDispatch();
  const dragons = useSelector(selectDragons);

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {dragons.map((dragon) => (
          <li key={dragon.id}>
            <h3>{dragon.name}</h3>
            <p>{dragon.type}</p>
            {dragon.flickr_images.map((image) => (
              <img key={image} src={image} alt={`Dragon ${dragon.id}`} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dragon;
