import React from 'react';
import cls from '../Profile/ProfileInfo/ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={cls.profileStatus}>
                <>
                    <div>
                        {this.state.editMode ? <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.disableEditMode} type="text" value={this.state.status} /> : <h3 onDoubleClick={this.activeEditMode}>{this.props.status}</h3>}
                    </div>
                </>
            </div>
        )
    }
}

export default ProfileStatus;