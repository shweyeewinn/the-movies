import {
  FETCH_SEARCH_MOVIE_PENDING,
  FETCH_SEARCH_MOVIE_SUCCESS,
  FETCH_SEARCH_MOVIE_FAIL
} from '../types';

import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1cc47995d6ef41a7128ad0bc24db6988';

const fetchMovieStart = () => ({
  type: FETCH_SEARCH_MOVIE_PENDING
});

const fetchMovieSuccess = data => ({
  type: FETCH_SEARCH_MOVIE_SUCCESS,
  payload: data
});

const fetchMovieFail = error => ({
  type: FETCH_SEARCH_MOVIE_FAIL,
  payload: error
});

export const searchMovie = term => async dispatch => {
  dispatch(fetchMovieStart());
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${term}`
    );
    dispatch(fetchMovieSuccess(data));
  } catch (error) {
    dispatch(fetchMovieFail(error.message));
  }
};
