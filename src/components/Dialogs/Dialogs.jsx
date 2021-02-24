import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import {Redirect} from "react-router";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogElement = state.dialogs.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
  let messageElement = state.messages.map((message) => <Message message={message.message} key={message.id} id={message.id} />);
  // let newMessageBody = state.newMessageBody;

  // let onSendMessageClick = () => {
  //   props.SendMessage();
  // };
  //
  // let onNewMessageChange = (e) => {
  //   let body = e.target.value;
  //   props.updateNewMessageBody(body);
  // };

  let addNewMessage = (values) => {
    props.SendMessage(values.newMessageBody);
  };

  if(!props.isAuth) return <Redirect to={'/login'}/>;

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElement}</div>
      <div className={classes.messages}>
        <div>{messageElement}</div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

export default Dialogs;


const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit }>
      <div><Field component={'textarea'} name={'newMessageBody'} placeholder='enter your massage'/></div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm'
})(AddMessageForm)
