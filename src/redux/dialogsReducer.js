const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [{ id: 1, message: 'Hello' }, {id: 2, message: 'How are you?' }, {id: 3, message: 'Good luck!' }],
  dialogs: [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Robert' },
    { id: 3, name: 'Ivan' },
  ],
  newMessageBody: '',
};

const dialogsReducer = ( state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: 4, message: body});
      return state;
      
    default: return state;
  }
}

export const sendNewMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;