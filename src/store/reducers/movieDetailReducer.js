import {
  GET_MOVIE_DETAIL_PENDING,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAIL
} from '../types';

const initialState = {
  data: {},
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL_PENDING:
      return {
        ...state,
        data: {},
        loading: true,
        error: null
      };
    case GET_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case GET_MOVIE_DETAIL_FAIL:
      return {
        ...state,
        data: {},
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
