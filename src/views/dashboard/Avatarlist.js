import React from "react";
import {
  CImg
} from '@coreui/react'
import team1 from "../../assets/avatar/team-1.jpg";
import team2 from "../../assets/avatar/team-2.jpg";
import team3 from "../../assets/avatar/team-3.jpg";
import team4 from "../../assets/avatar/team-4.jpg";

const Avatarlist = () => {
  return (
    <div className=".c-avatars-stack">
    <div className="c-avatar">
          <CImg
            src={team1}
            className="c-avatar-img"
            alt="User"
          />
          </div>
          <div className="c-avatar">
          <CImg
            src={team2}
            className="c-avatar-img"
            alt="User"
          />
          </div>
          <div className="c-avatar">
          <CImg
            src={team3}
            className="c-avatar-img"
            alt="User"
          />
          </div>
          <div className="c-avatar">
          <CImg
            src={team4}
            className="c-avatar-img"
            alt="User"
          />
          </div>
        </div>
     
  );
};

export default Avatarlist;
