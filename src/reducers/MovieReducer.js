import {
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_FAIL
} from '../actions/types'

const INITIAL_STATE = {
  moviesLoading: true,
  error: '',
  movies: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIES_FETCH_SUCCESS:
      return { ...state, ...INITIAL_STATE, moviesLoading: false, movies: action.payload }
    case MOVIES_FETCH_FAIL:
      return { ...state, ...INITIAL_STATE, moviesLoading: false, error: action.payload }
    default:
      return state
  }
}
