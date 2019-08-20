import {
  GET_GENRES_LIST_PENDING,
  GET_GENRES_LIST_SUCCESS,
  GET_GENRES_LIST_FAIL
} from '../types';

import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1cc47995d6ef41a7128ad0bc24db6988';

const getGenresListStart = () => ({
  type: GET_GENRES_LIST_PENDING
});

const getGenresListSuccess = data => ({
  type: GET_GENRES_LIST_SUCCESS,
  payload: data
});

const getGenresListFail = error => ({
  type: GET_GENRES_LIST_FAIL,
  payload: error
});

export const searchMovie = () => async dispatch => {
  dispatch(getGenresListStart());
  try {
    const { data } = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&query=${term}`
    );
    dispatch(getGenresListSuccess(data));
  } catch (error) {
    dispatch(getGenresListFail(error.message));
  }
};
