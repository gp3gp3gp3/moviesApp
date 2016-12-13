import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './reducers'
import Router from './Router'
import { loginFacebookUser } from './actions'

class App extends Component {
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyCUwGXe6SXGOO3BsAgkA25473aa9qkte2Y',
      authDomain: 'movieapp-e50e6.firebaseapp.com',
      databaseURL: 'https://movieapp-e50e6.firebaseio.com',
      storageBucket: 'movieapp-e50e6.appspot.com',
      messagingSenderId: '652341839823'
    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        loginFacebookUser({ user })
      }
    })
  }

  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
