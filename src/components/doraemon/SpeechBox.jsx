import React from 'react';
import './speechbox.scss';

function SpeechBox({t1="", t2="", t3=""}) {
  return (
    <div class='chat_block'>
      <div class='chat_bubble left'>
        {t1 && <p>{t1}</p>}
        {t2 && <p>{t2}</p>}
        {t3 && <p>{t3}</p>}
      </div>
    </div>
  );
}

export default SpeechBox;
