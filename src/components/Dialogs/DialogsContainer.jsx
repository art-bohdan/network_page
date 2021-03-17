import {connect} from 'react-redux';
import {sendNewMessageCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import React from "react";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

//create mapStateToProps
const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

//create mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    SendMessage: (newMessageBody) => {
      dispatch(sendNewMessageCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
