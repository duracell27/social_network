import React from 'react';
import cls from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "../../ProfileStatus/ProfileStatusWithHooks";
import {createField, Input, TextArea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={cls.userInfo}>
        <div>
            <button>save</button>
        </div>
        {props.error ? <div className={cls.formSummaryError}>{props.error}</div> : null}
        <div className={cls.name}>
            <div>
                <p>Full Name</p>
                {createField('Full name', 'fullName', [], Input)}
            </div>
            {/* <h3>{props.profile.aboutMe}</h3> */}
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
        <div className={cls.job}>
            <div className={cls.mark}>
                <p>Looking for a job:</p>
                {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}

            </div>
            <span>
                <p>My professional skills</p>
                {createField('Your Skills', 'lookingForAJobDescription', [], TextArea)}

            </span>
            <div>
                <p>About ME</p>
                {createField('About ME', 'aboutMe', [], Input)}

            </div>
        </div>
        <div className={cls.contacts}>
            <p><b>Facebook:</b>
                {createField('Facebook', 'contacts.facebook', [], Input)}
            </p>
            <p><b>Website:</b>
                {createField('Website', 'contacts.website', [], Input)}
            </p>
            <p><b>Vk:</b>
                {createField('Vk', 'contacts.vk', [], Input)}
            </p>
            <p><b>Twitter:</b>
                {createField('Twitter', 'contacts.twitter', [], Input)}
            </p>
            <p><b>Instagram:</b>
                {createField('Instagram', 'contacts.instagram', [], Input)}
            </p>
            <p><b>Youtube:</b>
                {createField('Youtube', 'contacts.youtube', [], Input)}
            </p>
            <p><b>Github:</b>
                {createField('Github', 'contacts.github', [], Input)}
            </p>
            <p><b>MainLink:</b>
                {createField('MainLink', 'contacts.mainLink', [], Input)}
            </p>
        </div>
    </form>;
}

let ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;