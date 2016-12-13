import React from 'react'
import { LoginButton } from 'react-native-fbsdk'

const FacebookButton = () => (
  <LoginButton
    publishPermissions={['publish_actions']}
    onLoginFinished={() => console.log('login finished')}
    onLogoutFinished={() => console.log('logout finished')}
  />
)

export default FacebookButton
