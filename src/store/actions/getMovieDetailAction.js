import {
  GET_MOVIE_DETAIL_PENDING,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAIL
} from '../types';

import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1cc47995d6ef41a7128ad0bc24db6988';

const getMovieDetailStart = () => ({
  type: GET_MOVIE_DETAIL_PENDING
});

const getMovieDetailSuccess = data => ({
  type: GET_MOVIE_DETAIL_SUCCESS,
  payload: data
});

const getMovieDetailFail = error => ({
  type: GET_MOVIE_DETAIL_FAIL,
  payload: error
});

export const getMovieDetail = id => async dispatch => {
  dispatch(getMovieDetailStart());
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    dispatch(getMovieDetailSuccess(data));
  } catch (error) {
    dispatch(getMovieDetailFail(error.message));
  }
};
