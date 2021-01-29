const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        //return new array based on the old one
        users: state.users.map(user => {
          if (user.id === action.userId) {
            //if Id value matches, return  new followed
            return {...user, followed: true}
          }
          return user;
        }),
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
      ;
    case SET_USERS: {
      return {
        //take old users and will add new users who come with action
        ...state, users: [...state.users, ...action.users],
      }
    }
      ;
    default:
      return state;
  }
};

//action creator
export const followAC = (userId) => (
  {type: FOLLOW, userId});
export const unfollowAC = (userId) => (
  {type: UNFOLLOW, userId});
//
export const setUsersAC = (users) => (
  {type: SET_USERS, users});

export default usersReducer;
