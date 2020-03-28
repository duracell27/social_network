import React, {useState} from 'react';
import cls from '../Profile/ProfileInfo/ProfileInfo.module.css';
import {dataKey} from "redux-form/lib/util/eventConsts";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

   const  onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={cls.profileStatus}>
            <div>
                {!editMode && <h3 onDoubleClick={activateEditMode}>{status}</h3>}
                {editMode && <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode} type="text"/>}
            </div>
        </div>
    )
}

export default ProfileStatusWithHooks;