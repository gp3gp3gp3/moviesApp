import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import MovieList from './components/MovieList'
import Movie from './components/Movie'

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
      <Scene
        key='movieShow'
        component={Movie}
        title='Movie'
      />
    </Scene>
  </Router>
)

export default RouterComponent
