import axios from 'axios'
import {
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_FAIL
} from './types'

export const fetchMovies = () => dispatch => {
  axios.get(`https://api-public.guidebox.com/v1.43/US/0LiaVZnVvhOeiUZ1FFIYW53K0atxtR/movies/all/50/25/all/all`)
    .then(res => {
      dispatch({ type: MOVIES_FETCH_SUCCESS, payload: res.data.results })
    })
    .catch(err => {
      dispatch({ type: MOVIES_FETCH_FAIL, payload: err.error })
    })
}
