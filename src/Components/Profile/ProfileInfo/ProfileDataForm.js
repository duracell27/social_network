import React from'react';
import cls from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "../../ProfileStatus/ProfileStatusWithHooks";
import jobTrue from "../../../assets/img/jobtrue.png";
import jobFalse from "../../../assets/img/jobfalse.png";
import {createField, Input, TextArea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = (props) => {
    return <form className={cls.userInfo}>
        <div>
            <button onClick={()=>{}}>save</button>
        </div>

        <div className={cls.name}>
            <h1>
                <p>Full Name</p>
                {createField('Full name', 'fullName', [], Input)}
               </h1>
            {/* <h3>{props.profile.aboutMe}</h3> */}
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
        <div className={cls.job}>
            <div className={cls.mark}>
                <p>Looking for a job:</p>
                {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}

            </div>
            <span>
                <p>Set description</p>
                {createField('Type description for a job', 'lookingForAJobDescription', [], TextArea)}
                {props.profile.lookingForAJobDescription}
            </span>
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
    </form>;
}

let ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;