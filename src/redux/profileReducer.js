const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { message: 'Hello my name is Bob', likeCount: 22 },
    { message: "It's my first post", likeCount: 12 },
  ],
  newPostText: 'Bob programer',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        message: state.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        posts : [...state.posts, (newPost)],
        newPostText : '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText : action.newText,
      }
    }
    default:
      return state;
  }
};

//action creator
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
