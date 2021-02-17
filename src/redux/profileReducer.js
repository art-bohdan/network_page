import {usersAPI} from "../api/Api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
  posts: [
    {id:1, message: 'Hello my name is Bob', likeCount: 22 },
    {id:2, message: "It's my first post", likeCount: 12 },
  ],
  newPostText: 'Bob programs Man',
  profile: null,
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
        //create copy and add element to array
        posts : [...state.posts, (newPost)],
        newPostText : '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state, newPostText : action.newText,
      }
    }case SET_USERS_PROFILE: {
      return {
        ...state, profile : action.profile,
      }
    }
    default:
      return state;
  }
};

//action creator
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUsersProfile = (profile) => ({type:SET_USERS_PROFILE, profile })

//thunk
export const getUsersProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(data => {
    dispatch(setUsersProfile(data));
  })
}

export default profileReducer;
