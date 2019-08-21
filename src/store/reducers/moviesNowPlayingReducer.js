import {
  GET_NOW_PLAYING_MOVIES_PENDING,
  GET_NOW_PLAYING_MOVIES_SUCCESS,
  GET_NOW_PLAYING_MOVIES_FAIL
} from '../types';

const initialState = {
  data: {},
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOW_PLAYING_MOVIES_PENDING:
      return {
        ...state,
        data: {},
        loading: true,
        error: null
      };
    case GET_NOW_PLAYING_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case GET_NOW_PLAYING_MOVIES_FAIL:
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
