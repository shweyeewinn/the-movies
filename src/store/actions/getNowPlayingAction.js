import {
  GET_NOW_PLAYING_MOVIES_PENDING,
  GET_NOW_PLAYING_MOVIES_SUCCESS,
  GET_NOW_PLAYING_MOVIES_FAIL
} from '../types';

import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1cc47995d6ef41a7128ad0bc24db6988';

const getNowPlayingMoviesStart = () => ({
  type: GET_NOW_PLAYING_MOVIES_PENDING
});

const getNowPlayingMoviesSuccess = data => ({
  type: GET_NOW_PLAYING_MOVIES_SUCCESS,
  payload: data
});

const getNowPlayingMoviesFail = error => ({
  type: GET_NOW_PLAYING_MOVIES_FAIL,
  payload: error
});

export const getNowPlayingMovies = () => async dispatch => {
  dispatch(getNowPlayingMoviesStart());
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
    );
    dispatch(getNowPlayingMoviesSuccess(data));
  } catch (error) {
    dispatch(getNowPlayingMoviesFail(error.message));
  }
};
