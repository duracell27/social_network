import React from 'react';
import cls from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import jobTrue from '../../../assets/img/jobtrue.png';
import jobFalse from '../../../assets/img/jobfalse.png';
import noAva from '../../../assets/img/people.png';
import ProfileStatus from '../../ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {


  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={cls.content}>
      <div>
        <img src='https://panovatravel.com/wp-content/uploads/2017/12/original-1800955822-1200x300.jpg' alt='profimg'></img>
      </div>
      <div className={cls.descr}>
        <div className={cls.img}>
          <img src={props.profile.photos.small || noAva} alt="ava" />
        </div>
        <div className={cls.userInfo}>
          <div className={cls.name}>
            <h1>{props.profile.fullName}</h1>
            {/* <h3>{props.profile.aboutMe}</h3> */}
            <ProfileStatus status={'hello my friend'}/>
          </div>
          <div className={cls.job}>
            <div className={cls.mark}>
              <p>Looking for a job:</p> {props.profile.lookingForAJob ? <img src={jobTrue} /> : <img src={jobFalse} />}
            </div>
            <span>{props.profile.lookingForAJobDescription}</span>
          </div>
          <div className={cls.contacts}>
            <p><b>Facebook:</b> {props.profile.contacts.facebook || 'Not Set'}</p>
            <p><b>Website:</b> {props.profile.contacts.website || 'Not Set'}</p>
            <p><b>Vk:</b> {props.profile.contacts.vk || 'Not Set'}</p>
            <p><b>Twitter:</b> {props.profile.contacts.twitter || 'Not Set'}</p>
            <p><b>Instagram:</b> {props.profile.contacts.instagram || 'Not Set'}</p>
            <p><b>Youtube:</b> {props.profile.contacts.youtube || 'Not Set'}</p>
            <p><b>Github:</b> {props.profile.contacts.github || 'Not Set'}</p>
            <p><b>MainLink:</b> {props.profile.contacts.mainLink || 'Not Set'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;