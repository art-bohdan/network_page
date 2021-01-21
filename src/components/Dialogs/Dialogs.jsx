import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendNewMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

const Dialogs = props => {
  let state = props.store.getState().dialogsPage;
  
  let dialogElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messageElement = state.messages.map(message => <Message message={message.message} id = {message.id}/>);
  let newMessageBody = state.newMessageBody;
  
  let onSendMessageClick = () => {
  props.store.dispatch(sendNewMessageCreator());
  };
let onNewMessageChange = (e) => {
  let body = e.target.value;
  props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElement}</div>
      <div className={classes.messages}>
        <div>{messageElement}</div>
        <div>
          <textarea value = {newMessageBody} onChange={onNewMessageChange} placeholder = 'enter your massage'></textarea>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
