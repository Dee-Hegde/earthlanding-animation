import React, { useState } from "react";
import likndInIcon from "../../../assets/images/about-us/linkedinIcon.svg";
import Information from "../../../assets/images/about-us/information.svg";

function UserCard({ team }) {
  const [cardFlip, rotateCard] = useState(false);

  const handleFlip = () => {
    rotateCard(!cardFlip);
  };
  return (
    <div className="ourTeamCardContainer">
      <div className="personDetailsWrapper">
      </div>
      <div className="flip-box">
        <div
          className={`${
            cardFlip
              ? "flip-box-inner rotateEffect"
              : "flip-box-inner rotateEffectback"
          }`}
        >
          <div className="flip-box-front">
            <div className="teamPictureContainer">
              <img
                className="teamMemberPicture"
                src={team?.picture}
                alt="Paris"
              />
              <img
                onClick={handleFlip}
                className="informationIcon"
                src={Information}
                alt=""
              />
            </div>
          </div>
          <div className="flip-box-back">
            <div className="teamDataContainer">
              <h2>{team?.about}</h2>
            </div>
            <img
              onClick={handleFlip}
              className="informationIcon"
              src={Information}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
