import {profileAPI, usersAPI} from "../api/Api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {id:1, message: 'Hello my name is Bob', likeCount: 22 },
    {id:2, message: "It's my first post", likeCount: 12 },
  ],
  newPostText: 'Bob programs Man',
  profile: null,
  status: '',

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
    }case SET_STATUS: {
      return {
        ...state, status : action.status,
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
export const setStatus = (status) => ({type:SET_STATUS, status })

//thunk
export const getUsersProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUsersProfile(response.data));
  })
}
export const getUsersStatus = (status) => (dispatch) => {
  profileAPI.getStatus(status)
    .then(response => {
      dispatch(setStatus(response.data))})
}

export const updateUsersStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
    if(response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
    })
}

export default profileReducer;
