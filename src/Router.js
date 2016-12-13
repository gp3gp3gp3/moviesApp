import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import MovieList from './components/MovieList'

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key='auth'>
      <Scene
        key='login'
        component={LoginForm}
        title='Please Login'
      />
    </Scene>

    <Scene key='main'>
      <Scene
        key='movieList'
        component={MovieList}
        title='Movies'
        initial
      />
    </Scene>
  </Router>
)

export default RouterComponent
