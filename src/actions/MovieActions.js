import axios from 'axios'
import {
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_FAIL,
  MOVIE_FETCH_SUCCESS
} from './types'

export const fetchMovies = () => dispatch => {
  axios.get(`https://api-public.guidebox.com/v1.43/US/rK5hSALNTzZ6QWwXESVZF9UcLtItfp3c/movies/all/0/250/all/all`)
    .then(res => {
      dispatch({ type: MOVIES_FETCH_SUCCESS, payload: res.data.results })
    })
    .catch(err => {
      dispatch({ type: MOVIES_FETCH_FAIL, payload: err.error })
    })
}

export const fetchMovie = ({ id }) => dispatch => {
  axios.get(`https://api-public.guidebox.com/v1.43/US/rK5hSALNTzZ6QWwXESVZF9UcLtItfp3c/movie/${id}`)
    .then(res => {
      dispatch({ type: MOVIE_FETCH_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: MOVIES_FETCH_FAIL, payload: err.error })
    })
}
