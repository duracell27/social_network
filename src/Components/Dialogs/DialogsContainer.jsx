import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return{
        dialogsData: state.messages.dialogsData,
        messagesData: state.messages.messagesData,
        newMessageText: state.messages.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        addMessage: () => {
            
            dispatch(addMessageActionCreator());
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);