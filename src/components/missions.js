import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, selectMissions } from '../redux/Missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector(selectMissions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <>
      {missions.map((mission) => (
        <p key={mission.mission_id} className="missionName">{mission.description}</p>
      ))}
      ;
    </>
  );
};

export default Missions;
