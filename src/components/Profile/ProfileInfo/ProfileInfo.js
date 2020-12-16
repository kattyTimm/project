import React from 'react';

import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  console.log(props.profile);

   if(!props.profile){ 
     return <Preloader />
   }

  return (
      <div className={s.contentInfo}>    
        <div className={s.avaTemp}>
           <img className={s.ava} src="https://img3.goodfon.ru/original/6000x4000/4/dd/abstract-colors-unreal-clouds-1927.jpg" />
        </div>

        <div className={s.description}>

           <img src={props.profile.photos.large}/>

           <div>
               <span className={s.describeItem}>name: </span>
               <span>{props.profile.fullName}</span>
           </div>

            <div>
               <span className={s.describeItem}>aboutMe: </span>
               <span>{props.profile.aboutMe}</span>
           </div>

            <div>
               <span className={s.describeItem}> I`m looking for a job: </span>
               {props.profile.lookingForAJob ? <span>yes</span> : <span>no</span>}
               { 
                props.profile.lookingForAJob && <div>
                                                  <span className={s.describeItem}>main stream: </span>
                                                  <span>
                                                       {props.profile.lookingForAJobDescription}
                                                  </span>
                                                </div> 
               }
           </div>

          <div>
               <span className={s.describeItem}>facebook: </span>
               <span>{props.profile.contacts.facebook}</span>
           </div>

        </div>

      </div> 
  );
}

export default ProfileInfo;
