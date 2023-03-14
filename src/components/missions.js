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
    <section className="missions-section">
      <h2 className="missions-title">Missions</h2>
      <table className="table-container">
        <thread>
          <tr className="mission-tr">
            <th className="column-title">Missions</th>
            <th className="column-title">Description</th>
            <th className="column-title">Status</th>
          </tr>
        </thread>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id} className="missionName">
              <td className="mission-description">{mission.description}</td>
              <td className="mission-name">{mission.mission_name}</td>
              <td className="mission-status">Not booked</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
