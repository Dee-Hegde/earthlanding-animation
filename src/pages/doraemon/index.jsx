import React, { useEffect, useRef, useState } from 'react';
import '../../assets/css/doraemon.scss';
import { dashboardImages } from '../../utils/dashboard-helper';
import standDora from '../../assets/images/doraemon-jump/standDora.png';
import cryNobi from '../../assets/images/doraemon-jump/crynobi.png';
import gfDora from '../../assets/images/doraemon-jump/gfDora.png';


function Doraemon() {
  const [totalHieght, setTotalHeight] = useState(0);
  const [flyDoraPosition, setFlyDoraPosition] = useState({top:20, width:15});

  console.log(totalHieght);

  useEffect(() => {
    function logScrollY() {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const component = (scrollY / viewportHeight) * 100;
      if (component < 220) {
        setFlyDoraPosition({ top: 20, width: 15 });
      } else {
        setFlyDoraPosition({ top: 50, width: 10 });
      }
      setTotalHeight(component);
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', logScrollY);
  });
  return (
    <div className='doraemon-container'>
      <div className='first-container'>
        <div className='cloud'></div>
        <img
          className={totalHieght > 60 ? 'gf-dora-invisible' : 'gf-dora'}
          src={gfDora}
          alt=''
        />
        <img
          className={totalHieght > 299 ? 'display-none' : 'flydora'}
          style={{
            top: `${flyDoraPosition.top}%`,
            width: `${flyDoraPosition.width}%`,
          }}
          src={dashboardImages.flyDora}
          alt=''
        />

        <div className='cloud cloudtwo'></div>
        <div className='cloud cloudthree'></div>
      </div>
      <div className='first-container'>
        <div className='cloud cloudtwo'></div>
        <div className='cloud cloudthree'></div>
        <div className='cloud'></div>
      </div>
      <div className='first-container'>
        <div className='cloud cloudtwo'></div>
        <div className='cloud cloudthree'></div>
        <div className='cloud'></div>
      </div>
      <div className='second-container'>
        <img
          className={totalHieght < 299 ? 'display-none' : 'stand-dora'}
          src={standDora}
          alt=''
        />
        <img
          className={totalHieght < 299 ? 'display-none' : 'stand-dora'}
          src={standDora}
          alt=''
        />
        <img
          className={'crying-nobi'}
          src={cryNobi}
          alt=''
        />
      </div>
    </div>
  );
}

export default Doraemon;
