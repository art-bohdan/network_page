import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import siteBarReducer from "./siteBarReducer";

let store = {
  _state : {
    profilePage: {
      posts: [
        { message: 'Hello my name is Bob', likeCount: 22 },
        { message: "It's my first post", likeCount: 12 },
      ],
      newPostText: 'Bob programer',
    },
    dialogsPage: {
      messages: [{ id: 1, message: 'Hello' }, {id: 2, message: 'How are you?' }, {id: 3, message: 'Good luck!' }],
      dialogs: [
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Robert' },
        { id: 3, name: 'Ivan' },
      ],
      newMessageBody: '',
    },
    siteBar: {},
  },
  _callSubscriber () {
    console.log('State is changed');
  },
  
  getState() {
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },
  
  dispatch(action) {
  
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.siteBar = siteBarReducer(this._state.siteBar, action);
    this._callSubscriber(this._state);
    
  }
}

export default store;
