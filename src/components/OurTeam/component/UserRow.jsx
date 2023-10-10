import React from 'react';
// import likedInIcon from "../../../assets/images/about-us/linkedinIcon.svg";
import { Parallax } from 'react-parallax';

import whiteBackgoround from '../../../assets/images/about-us/whiteBackgoround.png';

function UserRow({ team }) {
  return (
    <div className='personDetailsContainer'>
      <div className='teamColumnWrapper'>
        <div className='flip-box'>
          <Parallax
            style={{ width: '100%' }}
            bgImage={whiteBackgoround}
            renderLayer={() => (
              <div
                className='teamMemberImage memberColumnLeft'
                style={{
                  bottom: 0,
                }}>
                <div className='flip-box-inner parallaxImageContainer'>
                  <div className='flip-box-front'>
                    <div className='parallaxImagewrapper '>
                      <img
                        className='parallaxImage'
                        src={team?.[0]?.picture}
                        alt='fill murray'
                      />
                    </div>
                  </div>
                  <div className='flip-box-back'>
                    <p>Name: {team?.[0]?.name}</p>
                    <p>Role: {team?.[0]?.role}</p>
                    <p>Time Period: {team?.[0]?.timePeriod}</p>
                    <p>About: {team?.[0]?.about}</p>
                  </div>
                </div>
              </div>
            )}>
            <div className='parallaxImageContainer ' />
          </Parallax>
        </div>
      </div>

      <div className='teamColumnWrapper'>
        <div className='flip-box'>
          <Parallax
            style={{ width: '100%' }}
            bgImage={whiteBackgoround}
            renderLayer={(percentage) => (
              <div
                className='teamMemberImage memberColumnMiddle'
                style={{
                  bottom: percentage * 125,
                  transform: 'translateY(125px)',
                }}>
                <div className='flip-box-inner parallaxImageContainer'>
                  <div className='flip-box-front'>
                    <div className='parallaxImagewrapper '>
                      <img
                        className='parallaxImage'
                        src={team?.[1]?.picture}
                        alt='fill murray'
                      />
                    </div>
                  </div>
                  <div className='flip-box-back'>
                    <p>Name: {team?.[1]?.name}</p>
                    <p>Role: {team?.[1]?.role}</p>
                    <p>Time Period: {team?.[1]?.timePeriod}</p>
                    <p>About: {team?.[1]?.about}</p>
                  </div>
                </div>
              </div>
            )}>
            <div className='parallaxImageContainer ' />
          </Parallax>
        </div>
      </div>

      <div className='teamColumnWrapper'>
        <div className='flip-box'>
          <Parallax
            style={{ width: '100%' }}
            bgImage={whiteBackgoround}
            renderLayer={(percentage) => (
              <div
                className='teamMemberImage memberColumnRight'
                style={{
                  bottom: percentage * 250,
                  transform: 'translateY(250px)',
                }}>
                <div className='flip-box-inner parallaxImageContainer'>
                  <div className='flip-box-front'>
                    <div className='parallaxImagewrapper '>
                      <img
                        className='parallaxImage'
                        src={team?.[2]?.picture}
                        alt='fill murray'
                      />
                    </div>
                  </div>
                  <div className='flip-box-back'>
                    <p>Name: {team?.[2]?.name}</p>
                    <p>Role: {team?.[2]?.role}</p>
                    <p>Time Period: {team?.[2]?.timePeriod}</p>
                    <p>About: {team?.[2]?.about}</p>
                  </div>
                </div>
              </div>
            )}>
            <div className='parallaxImageContainer ' />
          </Parallax>
        </div>
      </div>
    </div>
  );
}

export default UserRow;
