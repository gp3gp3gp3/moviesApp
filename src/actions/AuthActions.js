import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import { LoginManager } from 'react-native-fbsdk'

import {
  LOGIN_UPDATE,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from './types'

export const loginUpdate = ({ prop, value }) => (
  {
    type: LOGIN_UPDATE,
    payload: { prop, value }
  }
)

export const loginUser = ({ email, password }) => dispatch => {
  dispatch({ type: LOGIN_USER })

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(err => {
      console.log(err)

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch))
    })
}

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })

  Actions.main()
}

export const loginFacebookUser = ({ user }) => {
  Actions.main()
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user
  }
}

export const logOutUser = () => {
  LoginManager.logOut()
  firebase.auth().signOut()
  Actions.auth({ type: 'BackAction' })
  return { type: LOGOUT_USER }
}
