import React from 'react';
import { useSelector } from 'react-redux';
import { selectMissions } from '../redux/Missions/missionsSlice';
import { selectAllRockets } from '../redux/Rockets/rocketSlice';
import './Profile.css';

function Profile() {
  const reservedRockets = useSelector(selectAllRockets).filter((rocket) => rocket.isReserved);
  const joinedMissions = useSelector(selectMissions).filter((mission) => mission.joined);
  return (
    <div className="booked-elements">
      <div className="column rockets">
        <h2>My Rockets</h2>
        <div className="booked-div">
          {reservedRockets.map((rocket) => (
            <p key={rocket.id} className="booked-element">
              {rocket.name}
            </p>
          ))}
        </div>
      </div>
      <div className="column missions">
        <h2 className="missions-titl">My missions</h2>
        <div className="booked-div">
          {joinedMissions.map((mission) => (
            <p key={mission.mission_id} className="booked-element">
              {mission.mission_name}
            </p>
          ))}
        </div>
      </div>
      <div className="column dragons">
        <h2>My dragons</h2>
      </div>
    </div>
  );
}

export default Profile;
