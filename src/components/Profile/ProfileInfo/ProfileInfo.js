import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
      <div className={s.contentInfo}>    
        <div className={s.avaTemp}>
           <img className={s.ava} src="https://img3.goodfon.ru/original/6000x4000/4/dd/abstract-colors-unreal-clouds-1927.jpg" />
        </div>

        <div className={s.description}>
           description
        </div>

      </div>
  );
}

export default ProfileInfo;
