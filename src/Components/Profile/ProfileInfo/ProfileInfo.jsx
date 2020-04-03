import React, {useState} from 'react';
import cls from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import jobTrue from '../../../assets/img/jobtrue.png';
import jobFalse from '../../../assets/img/jobfalse.png';
import noAva from '../../../assets/img/people.png';
import ProfileStatusWithHooks from "../../ProfileStatus/ProfileStatusWithHooks";
import ProfileDataFormReduxForm from "./ProfileDataForm";


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    const goToEditMode = () => {
        setEditMode(true);
    }

    if (!props.profile) {
        return <Preloader/>
    }

    const photoChange = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(()=> {
            setEditMode(false);
        });

    }

    return (
        <div className={cls.content}>
            <div>
                <img src='https://panovatravel.com/wp-content/uploads/2017/12/original-1800955822-1200x300.jpg'
                     alt='profimg'></img>
            </div>
            <div className={cls.descr}>
                <div className={cls.img}>
                    <img src={props.profile.photos.large || noAva} alt="ava"/>
                    {props.isOwner ? <div><input className={cls.inputfile} name={'file'} id={'file'} type={'file'}
                                                 onChange={photoChange}/><label for="file">Update
                        Photo</label></div> : null}
                </div>
                {editMode ? <ProfileDataFormReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={goToEditMode}/>}

            </div>
        </div>
    );
}

const ProfileData = (props) => {
    return <div className={cls.userInfo}>
        {props.isOwner ? <div>
            <button onClick={props.goToEditMode}>edit</button>
        </div> : null}

        <div className={cls.name}>
            <h1>{props.profile.fullName}</h1>
            {/* <h3>{props.profile.aboutMe}</h3> */}
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
        <div className={cls.job}>
            <div className={cls.mark}>
                <p>Looking for a job:</p> {props.profile.lookingForAJob ? <img src={jobTrue}/> : <img src={jobFalse}/>}
            </div>
            <span>My skills: {props.profile.lookingForAJobDescription}</span>
            <div>
                <p>About me: {props.profile.aboutMe}</p>

            </div>
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
}

export default ProfileInfo;