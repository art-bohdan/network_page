import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogElement = state.dialogs.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
  let messageElement = state.messages.map((message) => <Message message={message.message} key={message.id} id={message.id} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.SendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElement}</div>
      <div className={classes.messages}>
        <div>{messageElement}</div>
        <div>
          <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='enter your massage'></textarea>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
