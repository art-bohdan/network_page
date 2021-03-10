import { usersAPI } from '../api/Api';
import {updateObjectInArray} from "../helpers/obectHelpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FOLLOW: {
        return {
          ...state,
          //return new array based on the old one
          users: updateObjectInArray(state.users, action.userId, 'id', {followed: true} )
        }
      }
      case UNFOLLOW: {
        return {
          ...state,
          users: state.users.map(user => {
            if (user.id === action.userId) {
              return {...user, followed: false}
            }
            return user;
          })
        }
      }
      case SET_USERS: {
        return {
          //take old users and will add new users who come with action
          ...state, users: action.users,
        }
      }
      case SET_CURRENT_PAGE: {
        return {
          ...state, currentPage: action.currentPage
        }
      }
      case SET_USERS_TOTAL_COUNT: {
        return {
          ...state, totalUsersCount: action.totalCount
        }
      }
      case TOGGLE_IS_FETCHING: {
        return {
          ...state, isFetching: action.isFetching
        }
      }case TOGGLE_IS_FOLLOWING_PROGRESS: {
        return {
          ...state,
          followingInProgress: action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !==action.userId)
        }
      }
      default:
        return state;
    }
  }
;

//action creator
export const followSuccess = (userId) => (
  {type: FOLLOW, userId});
export const unfollowSuccess = (userId) => (
  {type: UNFOLLOW, userId});
//
export const setUsers = (users) => (
  {type: SET_USERS, users});

export const setCurrentPage = (currentPage) => (
  {type: SET_CURRENT_PAGE, currentPage});

export const setUsersTotalCount = (totalCount) => (
  {type: SET_USERS_TOTAL_COUNT, totalCount});

export const toggleIsFetching = (isFetching) => (
  {type: TOGGLE_IS_FETCHING, isFetching});

export const toggleFollowingProgress = (isFetching, userId) => (
  {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});


//thunk creator
export const requestUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let response = await usersAPI.getUsers(page, pageSize);
    debugger;
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setUsersTotalCount(response.data.totalCount));
  };
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);
  debugger;
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
  return async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess );
  };
}
export const unfollow = (userId) => {
  return async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI) ,unfollowSuccess);
  };
};



export default usersReducer;
