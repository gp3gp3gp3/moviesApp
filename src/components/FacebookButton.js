import React from 'react'
import { View } from 'react-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { loginFacebookUser } from '../actions'

const onLoginFinished = (err, result) => {
  if (err) {
    console.error(`login has error: ${err}`)
  } else if (result.isCanceled) {
    console.error('login is canceled')
  } else {
    AccessToken.getCurrentAccessToken()
      .then(data => {
        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
        firebase.auth().signInWithCredential(credential)
          .then(user => loginFacebookUser({ user }))
          .catch(err => console.error(`firebase facebook auth error: ${err}`))
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
