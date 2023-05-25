import axios from 'axios';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });
    axios
      .get('https://reactnative.dev/movies.json')
      .then((response) => {
        dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data.movies });
      })
      .catch((error) => {
        dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
      });
  };
};
