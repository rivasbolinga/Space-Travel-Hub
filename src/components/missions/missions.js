import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMissions, joinMission, leavingMission, selectMissions,
} from '../../redux/Missions/missionsSlice';
import './missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector(selectMissions);
  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions]);

  const handleClick = (mission, id) => {
    if (mission.joined) {
      dispatch(leavingMission(id));
    } else {
      dispatch(joinMission(id));
    }
  };

  return (
    <section className="missions-section">
      <h2 className="missions-title">Missions</h2>
      <table className="table-container">
        <thead className="mission-th">
          <tr className="mission-tr">
            <th className="column-title">Missions</th>
            <th className="column-title">Description</th>
            <th className="column-title">Status</th>
            <th className="column-title">Action</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {missions.map((mission) => (
            <tr key={mission.mission_id} className="missions">
              <td className="mission-name">{mission.mission_name}</td>
              <td className="mission-description">{mission.description}</td>
              <td>
                <p
                  className={`mission-status ${
                    mission.joined ? 'active-member' : ''
                  }`}
                >
                  {mission.joined ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
                </p>
              </td>
              <td className="mission-join">
                <button
                  onClick={() => {
                    handleClick(mission, mission.mission_id);
                  }}
                  type="button"
                  className={`join-btn ${mission.joined ? 'joined' : ''}`}
                >
                  {mission.joined ? 'LEAVE MISSION' : 'JOIN MISSION'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
