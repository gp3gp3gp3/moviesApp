import {
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_FAIL,
  MOVIE_FETCH_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  moviesLoading: true,
  error: '',
  movies: [],
  movie: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIES_FETCH_SUCCESS:
      return { ...state, ...INITIAL_STATE, moviesLoading: false, movies: action.payload }
    case MOVIES_FETCH_FAIL:
      return { ...state, ...INITIAL_STATE, moviesLoading: false, error: action.payload }
    case MOVIE_FETCH_SUCCESS:
      return { ...state, movie: action.payload }
    default:
      return state
  }
}
