import React from 'react'
import { View, Alert } from 'react-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { loginFacebookUser } from '../actions'

const onLoginFinished = (err, result) => {
  if (err) {
    Alert.alert('Facebook Error', `Error logging into Facebook: ${err}`)
    console.error(`Login response has error: ${err}`)
  } else if (result.isCanceled) {
    console.log('Login was canceled')
  } else {
    AccessToken.getCurrentAccessToken()
      .then(data => {
        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
        firebase.auth().signInWithCredential(credential)
          .then(user => loginFacebookUser({ user }))
          .catch(err => {
            console.error('Firebase authentication error with Facebook', err)
            Alert.alert('Firebase Error', `Firebase authentication error: ${err}`)
          })
      })
  }
}

const FacebookButton = () => (
  <View style={{flex: 1}}>
    <View style={{alignSelf: 'center'}}>
      <LoginButton
        publishPermissions={['publish_actions']}
        onLoginFinished={onLoginFinished}
        onLogoutFinished={() => firebase.auth().signOut()}
      />
    </View>
  </View>
)

export default connect(null, { loginFacebookUser })(FacebookButton)
