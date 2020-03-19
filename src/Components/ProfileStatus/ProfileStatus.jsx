import React from 'react';
import cls from '../Profile/ProfileInfo/ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    disableEditMode = () => {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div className={cls.profileStatus}>
                <>
                    <div>
                        {this.state.editMode ? <input autoFocus={true} onBlur={this.disableEditMode} type="text" value={this.props.status} /> : <h3 onDoubleClick={this.activeEditMode}>{this.props.status}</h3>}
                    </div>
                </>
            </div>
        )
    }
}

export default ProfileStatus;