import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import MovieReducer from './MovieReducer'

export default combineReducers({
  auth: AuthReducer,
  movies: MovieReducer
})
