import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, joinMission, selectMissions } from '../../redux/Missions/missionsSlice';
import './missions.css';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleClick = (id) => {
    dispatch(joinMission(id));
  };
  const missions = useSelector(selectMissions);

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
                {mission.joined ? (
                  <p className="mission-joined">Active Member</p>
                ) : (
                  <p className="mission-status">NOT A MEMBER</p>
                )}
              </td>
              <td className="mission-join">

                <button
                  onClick={() => {
                    handleClick(mission.mission_id);
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
