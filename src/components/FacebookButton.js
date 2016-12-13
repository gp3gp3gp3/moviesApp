import React from 'react'
import { LoginButton, AccessToken } from 'react-native-fbsdk'
import firebase from 'firebase'

const FacebookButton = () => (
  <LoginButton
    publishPermissions={['publish_actions']}
    onLoginFinished={
      (err, result) => {
        if (err) {
          console.error(`login has error: ${result.error}`)
        } else if (result.isCanceled) {
          console.error('login is cancelled.')
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
            return firebase.auth().signInWithCredential(credential)
          })
        }
      }
    }
    onLogoutFinished={() => firebase.auth().signOut()} />
)

export default FacebookButton
