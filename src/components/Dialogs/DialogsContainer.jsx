//import React from 'react';
import { connect } from 'react-redux';
import { sendNewMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

//create mapStateToProps
const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

//create mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    SendMessage: () => {
      dispatch(sendNewMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
