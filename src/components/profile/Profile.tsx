import React from "react";
import propic from '../../assets/propic.jpg';
import './Profile.scss';

export const Profile: React.FC = () => {
  return <a aria-label="Profilo" href="#" className="propic">
    <img src={propic} alt="Profilo" width="35" height="35"/>
  </a>
}