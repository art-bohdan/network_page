import { profileAPI, usersAPI } from '../api/Api';

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
  posts: [
    { id: 1, message: 'Hello my name is Bob', likeCount: 22 },
    { id: 2, message: "It's my first post", likeCount: 12 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        message: action.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        //create copy and add element to array
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }
    case SET_USERS_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    default:
      return state;
  }
};

//action creator
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

//thunk
export const getUsersProfile = (userId) => {
  return async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUsersProfile(response.data));
  };
};
export const getUsersStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(status);
    dispatch(setStatus(response.data));
  };
};

export const updateUsersStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

export default profileReducer;
