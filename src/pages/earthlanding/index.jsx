import React from 'react';
import moon from '../../assets/images/earthlanding/moon.png';
import land from '../../assets/images/earthlanding/land.png';
import cat from '../../assets/images/earthlanding/cat.gif';
import '../../assets/css/earthlanding.scss';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Earthlanding() {
  return (
    <div className='container'>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.3, end: 4.5 }}
          style={{ textAlign: 'center' }}>
          <img
            src={cat}
            alt=''
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.05}>
          <h2>Let's Jump</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}>
          {/* <h2>Yeah!.. I reached Earth.</h2> */}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Earthlanding;
