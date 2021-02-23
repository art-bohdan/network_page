import {authAPI} from "../api/Api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';

let initialState = {
  userId: null,
  email:null,
  login:null,
  isAuth:false,
  password:null,
  rememberMe: false,
  captcha: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER_DATA: {
        return {
          ...state,
          ...action.data,
          isAuth: true,
            }
          }
          case SET_LOGIN_DATA: {
        return {
          ...state,
          ...action.data,
          isAuth: true,

            }
          }
      default:
        return state;
    }

  }

//action creator
export const setAuthUserData = (userId, email, login) => (
  {type: SET_USER_DATA, data:{userId, email, login}});

export const setLoginUserData = (email, password, rememberMe, captcha) => (
  {type: SET_LOGIN_DATA, data:{email, password, rememberMe, captcha}});

export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then(data => {
    if(data.resultCode === 0 ) {
      let {id, email, login} = data.data;
      dispatch(setAuthUserData(id, email, login));
    }
  })
}
export const getLoginData = () => (dispatch) => {
  authAPI.login().then(response => {
    if(response.data.resultCode === 0 ) {
      let {email, password, rememberMe, captcha} = response.data.data;
      dispatch(setAuthUserData(email, password, rememberMe, captcha));
    }
  })
}
export default authReducer;
