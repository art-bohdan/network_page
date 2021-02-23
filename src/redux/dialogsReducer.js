// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Good luck!' },
  ],
  dialogs: [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Robert' },
    { id: 3, name: 'Ivan' },
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case UPDATE_NEW_MESSAGE_BODY: {
    //   return {
    //     ...state,
    //     newMessageBody : action.body,
    //   };
    // }
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: body }],
      };
    }
    default:
      return state;
  }
};

export const sendNewMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });
// export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;
